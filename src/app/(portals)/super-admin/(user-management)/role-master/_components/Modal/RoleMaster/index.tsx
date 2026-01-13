import React, { useMemo } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Dropdown, Button } from '@/components/index';

import { MODAL_STYLING } from '@/constant/appConstants';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import SearchIcon from '@/public/assets/svg/search-icon.svg';
import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import { FormValues, RoleFormKeys, RoleMasterProps, RoleMasterType } from './type';

import { ROLE_MASTER_LIST, ROLE_TEXT as text } from './constant';

import styles from './styles.module.scss';

const RoleMasterModal = ({ open, setOpen, formValues, setFormValues }: RoleMasterProps) => {
    const updateFormValue = <K extends RoleFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange =
        (field: RoleFormKeys) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = e.target.value.replace(NO_LEADING_SPACES_REGEX, '');
            updateFormValue(field, value);
        };

    const filteredUserType = useMemo(
        () =>
            ROLE_MASTER_LIST?.filter((admin) =>
                admin?.name.toLowerCase().includes(formValues.searchFilter.toLowerCase()),
            ),
        [formValues.searchFilter],
    );

    const handleUserTypeSelect = (item: RoleMasterType | null) => {
        updateFormValue(RoleFormKeys.SELECTED_USER_TYPE, item);
    };

    const isCreateDisabled = !formValues.roleName?.trim() || !formValues.selectedUserType;

    return (
        <Modal open={open} setOpen={setOpen} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.roleName}
                        </Text>
                        <Input
                            value={formValues[RoleFormKeys.ROLE_NAME]}
                            name={RoleFormKeys.ROLE_NAME}
                            placeholder={text.enterRoleName}
                            onChange={handleChange(RoleFormKeys.ROLE_NAME)}
                        />
                    </div>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.userType}
                        </Text>
                        <Dropdown<RoleMasterType>
                            label={text.selectUserType}
                            options={filteredUserType}
                            selectValue='name'
                            value={formValues[RoleFormKeys.SELECTED_USER_TYPE]}
                            searchFilter={formValues[RoleFormKeys.SEARCH_FILTER]}
                            handleSearch={handleChange(RoleFormKeys.SEARCH_FILTER)}
                            onChange={handleUserTypeSelect}
                            searchStartIcon={SearchIcon}
                            optionAreaHeight={styles.forceUp}
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button
                        label={text.cancel}
                        variant={ButtonVariant.NORMAL}
                        onClick={() => setOpen(false)}
                        color='gray-600'
                        className={styles.button}
                    />
                    <Button
                        label={text.addRole}
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

export default RoleMasterModal;
