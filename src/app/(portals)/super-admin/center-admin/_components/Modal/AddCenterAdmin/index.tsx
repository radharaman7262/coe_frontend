import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Dropdown, Button } from '@/components/index';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';
import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { MODAL_STYLING } from '@/constant/appConstants';

import { KeyboardEvent } from '@/constant/enumConstant';

import { FontType, ButtonVariant } from '@/types/typographyCommon';
import { RoleType } from '@/types/roleType';

import { useGetRoleMasterList } from '@/app/(portals)/super-admin/(user-management)/role-master/queries';

import { useGetCenterDropDownList, useGetSpecializationDropDownList } from '../../../queries';
import { useUserCenterAdminAction } from '../../../userCenterAdminAction';

import { CENTER_ADMIN_TEXT as text, MAX_LENGTHS, INITIAL_STATE as initialState } from './constant';
import { checkAllFieldValidOrNot, validateInput } from './utils';
import {
    AddCenterAdminProps,
    CenterAdminFormKeys,
    CenterType,
    ErrorMessagesType,
    FormValues,
    SpecializationType,
} from './type';

import styles from './styles.module.scss';

const AddCenterAdmin = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    centerAdminId,
    setCenterAdminId,
}: AddCenterAdminProps) => {
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const phoneNoRef = useRef<HTMLInputElement | null>(null);
    const emailIdRef = useRef<HTMLInputElement | null>(null);

    const [loadingAddData, setLoadingAddData] = useState<boolean>(false);
    const [centerListDropDownFilter, setCenterListDropDownFilter] = useState<string>('');
    const [specializationDropDownFilter, setSpecializationDropDownFilter] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [CenterAdminFormKeys.FIRST_NAME]: lastNameRef,
        [CenterAdminFormKeys.LAST_NAME]: phoneNoRef,
        [CenterAdminFormKeys.PHONE_NO]: emailIdRef,
    };

    const { execute } = useUserCenterAdminAction({
        setShow: setOpen,
        setLoader: setLoadingAddData,
    });

    const { data: roleMasterListResponse } = useGetRoleMasterList();

    const { response: roleMasterList = [] }: { response: RoleType[] } =
        roleMasterListResponse || {};

    const centerAdmin = roleMasterList?.filter((item) => item.roleName === 'Center Admin');

    const { isLoading: specializedLoader, data } = useGetSpecializationDropDownList();

    const { response: specializationList } = data || [];

    const { isLoading: centerListLoader, data: centerDropdownData } = useGetCenterDropDownList();

    const { response: centerDropdownResponse } = centerDropdownData || [];

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== KeyboardEvent.ENTER) return;

        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const nextRef = INPUT_MAPPING[target.name];

        if (nextRef?.current) {
            nextRef?.current.focus();
        }
    };

    const filteredSpecialization = useMemo(
        () =>
            specializationList?.filter((item: SpecializationType) =>
                item?.name.toLowerCase().includes(specializationDropDownFilter.toLowerCase()),
            ),
        [specializationDropDownFilter, specializationList],
    );

    const filteredCenter = useMemo(
        () =>
            centerDropdownResponse?.filter((admin: CenterType) =>
                admin?.name.toLowerCase().includes(centerListDropDownFilter.toLowerCase()),
            ),
        [centerListDropDownFilter, centerDropdownResponse],
    );

    const updateFormValue = <K extends CenterAdminFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const fieldKey = name as CenterAdminFormKeys;

        const isNumericField = [CenterAdminFormKeys.PHONE_NO].includes(fieldKey);

        const isNumeric = !Number.isNaN(Number(value)) || value === '';

        if (isNumericField && !isNumeric) return;

        const maxLength = MAX_LENGTHS[fieldKey];

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValue(fieldKey as CenterAdminFormKeys, value);
            return;
        }

        if (!maxLength || value.length <= maxLength) {
            updateFormValue(fieldKey, value);
            validateInput(fieldKey, value, setErrorMessages);
        }
    };

    const handleSpecializationSelect = (item: SpecializationType | null) => {
        updateFormValue(CenterAdminFormKeys.SELECTED_SPECIALIZATION, item);
    };

    const handleCenterSelect = (item: CenterType | null) => {
        updateFormValue(CenterAdminFormKeys.SELECTED_CENTER, item);
    };

    const handleCenterFilterSearch = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setCenterListDropDownFilter(value);
    };

    const handleSpecializationFilterSearch = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setSpecializationDropDownFilter(value);
    };

    const handleAddNewAdmin = () => {
        setLoadingAddData(true);

        const centerIdString = formValues?.selectedCenter?.centerId?.toString() ?? '';
        const specializationIdString = formValues?.selectedSpecialization?.id.toString() ?? '';

        const body: {
            firstName: string;
            lastName: string;
            phone: string;
            email: string;
            roleId: string;
            centerId: string;
            specializationId: string;
        } = {
            firstName: formValues?.firstName,
            lastName: formValues?.lastName,
            phone: formValues?.phoneNo,
            email: formValues?.emailId,
            roleId: centerAdmin[0].id,
            centerId: centerIdString,
            specializationId: specializationIdString,
        };

        if (!centerAdminId) {
            execute({
                type: 'create',
                body,
            });
        } else {
            execute({
                type: 'update',
                id: centerAdminId,
                body,
            });
        }
    };

    const handleCancel = () => {
        setFormValues(initialState);
        setOpen(false);
        setCenterAdminId(null);
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
                        {text.addCenterAdmin}
                    </Text>
                </div>
                <div className={styles.body}>
                    <div className={styles.field}>
                        <div className={styles.left}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.firstName}
                            </Text>
                            <Input
                                ref={firstNameRef}
                                value={formValues[CenterAdminFormKeys.FIRST_NAME]}
                                name={CenterAdminFormKeys.FIRST_NAME}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                error={!!errorMessages[CenterAdminFormKeys.FIRST_NAME]}
                                helperText={errorMessages[CenterAdminFormKeys.FIRST_NAME] || ''}
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.lastName}
                            </Text>
                            <Input
                                ref={lastNameRef}
                                value={formValues[CenterAdminFormKeys.LAST_NAME]}
                                name={CenterAdminFormKeys.LAST_NAME}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                error={!!errorMessages[CenterAdminFormKeys.LAST_NAME]}
                                helperText={errorMessages[CenterAdminFormKeys.LAST_NAME] || ''}
                            />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.left}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.phoneNo}
                            </Text>
                            <Input
                                ref={phoneNoRef}
                                value={formValues[CenterAdminFormKeys.PHONE_NO]}
                                name={CenterAdminFormKeys.PHONE_NO}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                error={!!errorMessages[CenterAdminFormKeys.PHONE_NO]}
                                helperText={errorMessages[CenterAdminFormKeys.PHONE_NO] || ''}
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.emailId}
                            </Text>
                            <Input
                                ref={emailIdRef}
                                value={formValues[CenterAdminFormKeys.EMAIL_ID]}
                                name={CenterAdminFormKeys.EMAIL_ID}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                error={!!errorMessages[CenterAdminFormKeys.EMAIL_ID]}
                                helperText={errorMessages[CenterAdminFormKeys.EMAIL_ID] || ''}
                            />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles['left-dropdown']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.role}
                            </Text>
                            <Dropdown
                                label={text.centerAdmin}
                                options={centerAdmin}
                                selectValue='roleName'
                                value={centerAdmin[0]}
                                disable
                            />
                        </div>
                        <div className={styles['right-dropdown']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.specialization}
                            </Text>
                            <Dropdown<SpecializationType>
                                label={text.selectSpecialization}
                                options={filteredSpecialization}
                                selectValue='name'
                                value={formValues[CenterAdminFormKeys.SELECTED_SPECIALIZATION]}
                                searchFilter={specializationDropDownFilter}
                                handleSearch={handleSpecializationFilterSearch}
                                onChange={handleSpecializationSelect}
                                searchStartIcon={SearchIcon}
                                loading={specializedLoader}
                            />
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-500'
                        >
                            {text.assignCenter}
                        </Text>
                        <Dropdown<CenterType>
                            label={text.selectCenter}
                            options={filteredCenter}
                            selectValue='name'
                            value={formValues[CenterAdminFormKeys.SELECTED_CENTER]}
                            searchFilter={centerListDropDownFilter}
                            handleSearch={handleCenterFilterSearch}
                            onChange={handleCenterSelect}
                            searchStartIcon={SearchIcon}
                            loading={centerListLoader}
                        />
                    </div>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-cta-3'
                    >
                        {text.heyJustNeeds}
                    </Text>
                </div>
                <div className={styles.footer}>
                    <Button
                        label={text.cancel}
                        variant={ButtonVariant.NORMAL}
                        onClick={handleCancel}
                        color='gray-600'
                    />
                    <Button
                        label={!centerAdminId ? text.create : text.update}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        onClick={handleAddNewAdmin}
                        disabled={!isFormValid}
                        loader={loadingAddData}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddCenterAdmin;
