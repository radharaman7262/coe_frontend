import React, { useMemo, useRef } from 'react';

import { Button, Dropdown, Input, Text } from '@/components';

import Modal from '@/components/shared/Modal';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';
import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { MODAL_STYLING } from '@/constant/appConstants';

import { KeyboardEvent } from '@/constant/enumConstant';

import { DROPDOWN_LIST,INITIAL_STATE as initialState, NEW_CENTRE_TEXT as title } from './constant';

import { AddNewCentreProps, AdminType, FormField, FormValues } from './type';

import styles from './styles.module.scss';

const AddNewCentre = ({ open, setOpen , formValues, setFormValues }: AddNewCentreProps) => {
    const centerNameRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const contactRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [FormField?.CENTER_NAME]: addressRef,
        [FormField?.ADDRESS]: contactRef,
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

    const filteredAdmins = useMemo(
        () =>
            DROPDOWN_LIST.filter((admin) =>
                admin.name.toLowerCase().includes(formValues?.searchFilter.toLowerCase()),
            ),
        [formValues?.searchFilter],
    );

    const isCreateDisabled =
        !formValues?.centerName.trim() ||
        !formValues?.address.trim() ||
        !formValues?.contactDetails.trim();

    const updateFormValue = <K extends FormField>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange =
        (field: FormField) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateFormValue(field, e.target.value);
        };

    const handleAdminSelect = (item: AdminType | null) => {
        updateFormValue(FormField.SELECTED_ADMIN, item);
    };

    const handleCancel = () => {
        setFormValues(initialState);
        setOpen(false);
    };

    const handleSubmit = () => {
        setFormValues(initialState);
        setOpen(false);
    };

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
                            value={formValues?.centerName}
                            name={FormField?.CENTER_NAME}
                            placeholder={title.enterCenterName}
                            onChange={handleChange(FormField?.CENTER_NAME)}
                            onKeyDown={handleKeyDown}
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
                            value={formValues?.address}
                            name={FormField?.ADDRESS}
                            placeholder={title.enterFullAddressHere}
                            onChange={handleChange(FormField?.ADDRESS)}
                            onKeyDown={handleKeyDown}
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
                            value={formValues?.contactDetails}
                            name={FormField?.CONTACT_DETAILS}
                            placeholder={title.enterContactDetails}
                            onChange={handleChange(FormField?.CONTACT_DETAILS)}
                            onKeyDown={handleKeyDown}
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
                            selectValue='name'
                            value={formValues?.selectedAdmin}
                            searchFilter={formValues?.searchFilter}
                            handleSearch={handleChange(FormField?.SEARCH_FILTER)}
                            onChange={handleAdminSelect}
                            searchStartIcon={SearchIcon}
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
                        color='black'
                    />
                    <Button
                        label={title.createCenter}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        disabled={isCreateDisabled}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddNewCentre;
