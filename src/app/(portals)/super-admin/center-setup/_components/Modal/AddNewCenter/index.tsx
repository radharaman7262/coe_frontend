import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

import { Button, Dropdown, Input, Text } from '@/components';

import Modal from '@/components/shared/Modal';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';
import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { MODAL_STYLING } from '@/constant/appConstants';

import { KeyboardEvent } from '@/constant/enumConstant';

import { useGetCenterAdminDropDownList } from '../../../queries';
import { useUserCenterSetupActions } from '../../../userCenterSetupAction';

import { checkAllFieldValidOrNot, validateInput } from './utils';
import {
    AddNewCentreProps,
    AdminType,
    CenterSetupFormKeys,
    ErrorMessagesType,
    FormValues,
} from './type';
import { INITIAL_STATE as initialState, MAX_LENGTHS, NEW_CENTRE_TEXT as title } from './constant';

import styles from './styles.module.scss';

const AddNewCentre = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    centerId,
    setCenterId,
}: AddNewCentreProps) => {
    const centerNameRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const contactRef = useRef<HTMLInputElement | null>(null);

    const [loadingAddData, setLoadingAddData] = useState<boolean>(false);
    const [dropDownFilter, setDropDownFilter] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [CenterSetupFormKeys.CENTER_NAME]: addressRef,
        [CenterSetupFormKeys.ADDRESS]: contactRef,
    };

    const { execute } = useUserCenterSetupActions({
        setShow: setOpen,
        setLoader: setLoadingAddData,
    });

    const { data, isLoading: loadingDropdown } = useGetCenterAdminDropDownList();

    const { response: adminDropDownList = [] } = data || {};

    const handleSearchFilter = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setDropDownFilter(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== KeyboardEvent.ENTER) return;

        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const nextRef = INPUT_MAPPING[target.name];

        if (nextRef?.current) {
            nextRef?.current.focus();
        }
    };

    const filteredAdmins = useMemo<AdminType[]>(
        () =>
            (adminDropDownList ?? []).filter((admin: AdminType) =>
                (admin?.fullName ?? '')
                    .toLowerCase()
                    .includes((dropDownFilter ?? '').toLowerCase()),
            ),
        [adminDropDownList, dropDownFilter],
    );

    const updateFormValue = <K extends CenterSetupFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const fieldKey = name as CenterSetupFormKeys;

        const isNumericField = [CenterSetupFormKeys.CONTACT_DETAILS].includes(fieldKey);

        const isNumeric = !Number.isNaN(Number(value)) || value === '';

        if (isNumericField && !isNumeric) return;

        const maxLength = MAX_LENGTHS[fieldKey];

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValue(fieldKey as CenterSetupFormKeys, value);
            return;
        }

        if (!maxLength || value.length <= maxLength) {
            updateFormValue(fieldKey, value);
            validateInput(fieldKey, value, setErrorMessages);
        }
    };

    const handleAdminSelect = (item: AdminType | null) => {
        updateFormValue(CenterSetupFormKeys.SELECTED_ADMIN, item);
    };

    const handleCancel = () => {
        setFormValues(initialState);
        setOpen(false);
        setCenterId(null);
    };

    const handleAddNewCenter = () => {
        setLoadingAddData(true);

        const payload = {
            name: formValues?.centerName,
            address: formValues?.address,
            phone: formValues?.contactDetails,
            adminId:
                (formValues?.selectedAdmin && formValues?.selectedAdmin?.userId.toString()) || '',
        };

        if (!centerId) {
            execute({
                type: 'create',
                body: payload,
            });
        } else {
            execute({
                type: 'update',
                id: centerId,
                body: payload,
            });
        }
    };

    useEffect(() => {
        const isValid = checkAllFieldValidOrNot({ formValues, errorMessages });

        setIsFormValid(isValid);
    }, [errorMessages, formValues]);

    return (
        <Modal open={open} setOpen={setOpen} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                        {title.addNewCenter}
                    </Text>
                </div>

                <div className={styles.body}>
                    <div className={styles.field}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-500'
                            required
                        >
                            {title.centerName}
                        </Text>
                        <Input
                            ref={centerNameRef}
                            value={formValues[CenterSetupFormKeys.CENTER_NAME]}
                            name={CenterSetupFormKeys.CENTER_NAME}
                            placeholder={title.enterCenterName}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            error={!!errorMessages[CenterSetupFormKeys.CENTER_NAME]}
                            helperText={errorMessages[CenterSetupFormKeys.CENTER_NAME] || ''}
                        />
                    </div>
                    <div className={styles.field}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-500'
                            required
                        >
                            {title.address}
                        </Text>
                        <Input
                            ref={addressRef}
                            value={formValues[CenterSetupFormKeys.ADDRESS]}
                            name={CenterSetupFormKeys.ADDRESS}
                            placeholder={title.enterFullAddressHere}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            error={!!errorMessages[CenterSetupFormKeys.ADDRESS]}
                            helperText={errorMessages[CenterSetupFormKeys.ADDRESS] || ''}
                        />
                    </div>
                    <div className={styles.field}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-500'
                            required
                        >
                            {title.contactDetails}
                        </Text>
                        <Input
                            ref={contactRef}
                            value={formValues[CenterSetupFormKeys.CONTACT_DETAILS]}
                            name={CenterSetupFormKeys.CONTACT_DETAILS}
                            placeholder={title.enterContactDetails}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            error={!!errorMessages[CenterSetupFormKeys.CONTACT_DETAILS]}
                            helperText={errorMessages[CenterSetupFormKeys.CONTACT_DETAILS] || ''}
                        />
                    </div>
                    <div className={styles.field}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-500'
                        >
                            {title.centerAdmin}
                        </Text>
                        <Dropdown<AdminType>
                            label={title.selectCenterAdmin}
                            options={filteredAdmins}
                            selectValue='fullName'
                            value={formValues[CenterSetupFormKeys.SELECTED_ADMIN]}
                            isSearchable
                            searchFilter={dropDownFilter}
                            handleSearch={handleSearchFilter}
                            onChange={handleAdminSelect}
                            searchStartIcon={SearchIcon}
                            loading={loadingDropdown}
                        />
                    </div>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-cta-3'
                    >
                        {title.heyjustheads}
                    </Text>
                </div>

                <div className={styles.footer}>
                    <Button
                        label={title.cancel}
                        variant={ButtonVariant.NORMAL}
                        onClick={handleCancel}
                        color='gray-600'
                    />
                    <Button
                        label={!centerId ? title.createCenter : title.updatecenter}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        disabled={!isFormValid}
                        onClick={handleAddNewCenter}
                        loader={loadingAddData}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddNewCentre;
