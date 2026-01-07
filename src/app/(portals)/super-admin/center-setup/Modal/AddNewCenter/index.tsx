import React, { useMemo, useState } from 'react';

import { Button, Dropdown, Input, Text } from '@/components';

import Modal from '@/components/shared/Modal';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { MODAL_STYLING } from '@/constant/appConstants';

import { DROPDOWN_LIST, NEW_CENTRE_TEXT as title } from './constant';

import { AddNewCentreProps, AdminType, FormField, FormValues } from './type';

import styles from './styles.module.scss';

const AddNewCentre = ({ open, setOpen }: AddNewCentreProps) => {
    const [formValues, setFormValues] = useState<FormValues>({
        centerName: '',
        address: '',
        contactDetails: '',
        selectedAdmin: null,
        searchFilter: '',
    });

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
                            value={formValues?.centerName}
                            name='center name'
                            placeholder='Enter Center Name'
                            onChange={handleChange(FormField?.CENTER_NAME)}
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
                            value={formValues?.address}
                            name='address'
                            placeholder='Enter Full Address Here'
                            onChange={handleChange(FormField?.ADDRESS)}
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
                            value={formValues?.contactDetails}
                            name='contact details'
                            placeholder='Enter contact details'
                            onChange={handleChange(FormField?.CONTACT_DETAILS)}
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
                            label='Select Center Admin'
                            options={filteredAdmins}
                            selectValue='name'
                            value={formValues?.selectedAdmin}
                            searchFilter={formValues?.searchFilter}
                            handleSearch={handleChange(FormField?.SEARCH_FILTER)}
                            onChange={handleAdminSelect}
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
                        label='Cancel'
                        variant={ButtonVariant.NORMAL}
                        onClick={() => setOpen(false)}
                        color='black'
                    />
                    <Button
                        label='Create Center'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        disabled={isCreateDisabled}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddNewCentre;
