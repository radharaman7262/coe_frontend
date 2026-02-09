import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import Modal from '@/components/shared/Modal';

import { Text, Input, Dropdown, Button } from '@/components/index';

import { MODAL_STYLING } from '@/constant/appConstants';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import SearchIcon from '@/public/assets/svg/search-icon.svg';
import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { useGetUserTypeList } from '../../../../user-type/queries';

import { FormValues, RoleFormKeys, RoleMasterProps, RoleMasterType } from './type';

import { MAX_LENGTHS, ROLE_TEXT as text } from './constant';

import { useAddRoleMasterMutation, useUpdateRoleMasterMutation } from '../../../mutation';

import {
    checkAllFieldValidOrNot,
    RoleErrorMessagesType,
    setErrorMsgOnValidationFailed,
    validateInput,
} from './utils';

import { getUserType } from '../../../utils';

import styles from './styles.module.scss';

const RoleMasterModal = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    roleId,
    setRoleId,
}: RoleMasterProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<RoleErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [searchFilter, setSearchFilter] = useState<string>('');

    const router = useRouter();

    const { mutate } = useAddRoleMasterMutation({
        setLoader: setLoading,
        setShow: setOpen,
        router,
    });

    const { mutate: updateRoleMasterMutation } = useUpdateRoleMasterMutation({
        setLoader: setLoading,
        setShow: setOpen,
        router,
    });

    const { data } = useGetUserTypeList();

    const { response: userTypeList } = data || {};

    const updateFormValue = <K extends RoleFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValue(name as RoleFormKeys, value);
            return;
        }

        if (
            !MAX_LENGTHS[name as RoleFormKeys] ||
            value.length <= MAX_LENGTHS[name as RoleFormKeys]
        ) {
            updateFormValue(name as RoleFormKeys, value);

            const isFieldValid = validateInput(name as RoleFormKeys, value);

            const { key, message, isInputValid } = isFieldValid;

            setErrorMsgOnValidationFailed({ key, message, isInputValid, setErrorMessages });
        }
    };

    const handleUserTypeSelect = (item: RoleMasterType | null) => {
        updateFormValue(RoleFormKeys.SELECTED_USER_TYPE, item);
    };

    const userTypeOptions = useMemo(() => getUserType(userTypeList), [userTypeList]);

    const filteredUserType = useMemo(
        () =>
            userTypeOptions?.filter((admin) =>
                admin?.name.toLowerCase().includes(searchFilter.toLowerCase()),
            ),
        [searchFilter, userTypeOptions],
    );

    const handleAddNewRole = () => {
        setLoading(true);

        let body: {
            id?: string;
            name: string;
            userTypeId: string;
        } = {
            name: formValues?.roleName,
            userTypeId: formValues?.selectedUserType?.id || '',
        };

        if (roleId) {
            body = {
                ...body,
                id: roleId?.toString() || '',
            };

            updateRoleMasterMutation(body);
        } else {
            mutate(body);
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setRoleId(null);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchFilter(value);
    };

    useEffect(() => {
        const isValid = checkAllFieldValidOrNot({ formValues, errorMessages });

        setIsFormValid(isValid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);

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
                            onChange={handleChange}
                            error={!!errorMessages[RoleFormKeys.ROLE_NAME]}
                            helperText={errorMessages[RoleFormKeys.ROLE_NAME] || ''}
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
                            searchFilter={searchFilter}
                            handleSearch={handleFilterChange}
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
                        onClick={() => handleCancel()}
                        color='gray-600'
                        className={styles.button}
                    />
                    <Button
                        label={!roleId ? text.addRole : text.updateRole}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        loader={loading}
                        disabled={loading || !isFormValid}
                        onClick={handleAddNewRole}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default RoleMasterModal;
