import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Button, Dropdown } from '@/components/index';

import CrossIcon from '@public/assets/svg/cross-icon.svg';
import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { MODAL_STYLING, STATIC_GENDER } from '@/constant/appConstants';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { RoleType } from '@/types/roleType';

import { useGetRoleMasterList } from '@/app/(portals)/super-admin/(user-management)/role-master/queries';

import { useGetLanguageList } from '@/app/(portals)/queries';

import { useGetSpecializationDropDownList } from '@/app/(portals)/super-admin/center-admin/queries';

import { languageDataType } from '@/app/(portals)/type';

import { INITIAL_STATE as initalState, MAX_LENGTHS, CENTER_ADMIN_TEXT as text } from './constant';

import {
    AddAdminStaffProps,
    AdminStaffFormKeys,
    ErrorMessagesType,
    FormValues,
    genderType,
    specializationType,
} from './type';

import { checkAllFieldValidOrNot, filterList, validateInput } from './utils';

import { useUserAdminStaffAction } from '../../../useAdminStaffAction';

import styles from './styles.module.scss';

const AddNewStaff = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    AdminStaffId,
    setAdminStaffId,
}: AddAdminStaffProps) => {
    const [roleListDropDownFilter, setRoleListDropDownFilter] = useState<string>('');

    const [loadingAddData, setLoadingAddData] = useState<boolean>(false);

    const [specializationDropDownFilter, setSpecializationDropDownFilter] = useState<string>('');

    const [languageDropDownFilter, setLanguageDropDownFilter] = useState<string>('');

    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});

    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const { execute } = useUserAdminStaffAction({
        setShow: setOpen,
        setLoader: setLoadingAddData,
    });

    const { isLoading: roleMasterLoader, data: roleMasterListResponse } = useGetRoleMasterList();

    const { response: roleMasterList = [] }: { response: RoleType[] } =
        roleMasterListResponse || {};

    const { isLoading: specializedLoader, data } = useGetSpecializationDropDownList();

    const { response: specializationList = [] }: { response: specializationType[] } = data || {};

    const { isLoading: languageLoader, data: languageData } = useGetLanguageList();

    const { data: languageResponse = [] }: { data: languageDataType[] } =
        languageData?.response || {};

    const filteredRole = useMemo(
        () => filterList(roleListDropDownFilter, 'roleName', roleMasterList),
        [roleListDropDownFilter, roleMasterList],
    );

    const filteredSpecialization = useMemo(
        () => filterList(specializationDropDownFilter, 'name', specializationList),
        [specializationDropDownFilter, specializationList],
    );

    const filteredLanguage = useMemo(
        () => filterList(languageDropDownFilter, 'name', languageResponse),
        [languageDropDownFilter, languageResponse],
    );

    const handleFilterSearch =
        (setFilter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = event.target;
            setFilter(value);
        };

    const handleSpecializationFilterSearch = handleFilterSearch(setSpecializationDropDownFilter);

    const handleLanguageFilterSearch = handleFilterSearch(setLanguageDropDownFilter);

    const handleRoleFilterSearch = handleFilterSearch(setRoleListDropDownFilter);

    const updateFormValue = <K extends AdminStaffFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const fieldKey = name as AdminStaffFormKeys;

        const isNumericField =
            [AdminStaffFormKeys.PHONE_NO].includes(fieldKey) ||
            [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE].includes(fieldKey);

        const isNumeric = !Number.isNaN(Number(value)) || value === '';

        if (isNumericField && !isNumeric) return;

        const maxLength = MAX_LENGTHS[fieldKey];

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValue(fieldKey as AdminStaffFormKeys, value);
            return;
        }

        if (!maxLength || value.length <= maxLength) {
            updateFormValue(fieldKey, value);
            validateInput(fieldKey, value, setErrorMessages);
        }
    };

    const handleLanguageSelect = (selectedValue: languageDataType) => {
        const selectedLanguage = formValues[AdminStaffFormKeys.LANGUAGE];

        const foundIndex = selectedLanguage.findIndex((item) => item.id === selectedValue.id);

        if (foundIndex !== -1) {
            updateFormValue(
                AdminStaffFormKeys.LANGUAGE,
                selectedLanguage.filter((item) => item.id !== selectedValue.id),
            );
        } else {
            updateFormValue(AdminStaffFormKeys.LANGUAGE, [...selectedLanguage, selectedValue]);
        }
    };

    const handleSelectRole = (item: RoleType | null) => {
        updateFormValue(AdminStaffFormKeys.ASSIGN_ROLE, item);
    };

    const handleSelectGender = (item: genderType | null) => {
        updateFormValue(AdminStaffFormKeys.GENDER, item);
    };

    const handleSpecializationSelect = (item: specializationType | null) => {
        updateFormValue(AdminStaffFormKeys.SELECTED_SPECIALIZATION, item);
    };

    const handleAddNewStaffMember = () => {
        setLoadingAddData(true);
        const specializationId = Number(formValues?.selectedSpecialization?.id);

        const body: {
            name: string;
            email: string;
            phone: string;
            gender: string;
            roleId: string;
            languages: number[];
            specializations: number[];
            totalYearExperience: string;
        } = {
            name: formValues?.name,
            email: formValues?.emailId,
            phone: formValues?.phoneNo,
            gender: formValues?.gender?.name || '',
            roleId: formValues?.assignRole?.id || '',
            languages: formValues?.language?.map((item: languageDataType) => Number(item.id)) || [],
            specializations: specializationId ? [specializationId] : [],
            totalYearExperience: formValues?.totalYearExperience,
        };
        if (!AdminStaffId) {
            execute({
                type: 'create',
                body,
            });
        } else {
            execute({
                type: 'update',
                id: AdminStaffId,
                body,
            });
        }
    };

    const handleCancel = () => {
        setFormValues(initalState);
        setOpen(false);
        setAdminStaffId(null);
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
                        {text.addNewProfessional}
                    </Text>
                    <CrossIcon className={styles['cursor-pointer']} onClick={handleCancel} />
                </div>
                <div className={styles.body}>
                    <div className={styles.field}>
                        <div className={styles.left}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.name}
                            </Text>
                            <Input
                                value={formValues[AdminStaffFormKeys.NAME]}
                                name={AdminStaffFormKeys.NAME}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                error={!!errorMessages[AdminStaffFormKeys.NAME]}
                                helperText={errorMessages[AdminStaffFormKeys.NAME] || ''}
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.gender}
                            </Text>
                            <Dropdown
                                label='Gender'
                                options={STATIC_GENDER}
                                selectValue='name'
                                value={formValues[AdminStaffFormKeys.GENDER]}
                                onChange={handleSelectGender}
                                isSearchable={false}
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
                                {text.emailId}
                            </Text>
                            <Input
                                value={formValues[AdminStaffFormKeys.EMAIL_ID]}
                                name={AdminStaffFormKeys.EMAIL_ID}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                error={!!errorMessages[AdminStaffFormKeys.EMAIL_ID]}
                                helperText={errorMessages[AdminStaffFormKeys.EMAIL_ID] || ''}
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text?.phoneNo}
                            </Text>
                            <Input
                                value={formValues[AdminStaffFormKeys.PHONE_NO]}
                                name={AdminStaffFormKeys.PHONE_NO}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                error={!!errorMessages[AdminStaffFormKeys.PHONE_NO]}
                                helperText={errorMessages[AdminStaffFormKeys.PHONE_NO] || ''}
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
                                {text.totalYearExperience}
                            </Text>
                            <Input
                                value={formValues[AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]}
                                name={AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE}
                                placeholder={text.enterHere}
                                onChange={handleInputChange}
                                error={!!errorMessages[AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]}
                                helperText={
                                    errorMessages[AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE] || ''
                                }
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.languageKnown}
                            </Text>
                            <Dropdown<languageDataType>
                                label={text.selectLanguage}
                                options={filteredLanguage}
                                selectValue='name'
                                value={formValues[AdminStaffFormKeys.LANGUAGE]}
                                onChange={handleLanguageSelect}
                                loading={languageLoader}
                                isSearchable
                                searchFilter={languageDropDownFilter}
                                handleSearch={handleLanguageFilterSearch}
                                multipleSelection
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
                                {text.assignRole}
                            </Text>
                            <Dropdown
                                label={text.selectRole}
                                options={filteredRole}
                                selectValue='roleName'
                                value={formValues[AdminStaffFormKeys.ASSIGN_ROLE]}
                                disable={!!AdminStaffId}
                                loading={roleMasterLoader}
                                isSearchable={false}
                                searchFilter={roleListDropDownFilter}
                                handleSearch={handleRoleFilterSearch}
                                onChange={handleSelectRole}
                            />
                        </div>
                        <div className={styles.right}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                {text.labelSpecialization}
                            </Text>
                            <Dropdown<specializationType>
                                label={text.selectSpecialization}
                                options={filteredSpecialization}
                                selectValue='name'
                                value={formValues[AdminStaffFormKeys.SELECTED_SPECIALIZATION]}
                                onChange={handleSpecializationSelect}
                                isSearchable={false}
                                searchFilter={specializationDropDownFilter}
                                handleSearch={handleSpecializationFilterSearch}
                                loading={specializedLoader}
                            />
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <Button
                            label={!AdminStaffId ? text.create : text.update}
                            variant={ButtonVariant.SOLID}
                            color='white'
                            StartIcon={<PlusIcon />}
                            className={styles.button}
                            disabled={!isFormValid}
                            loader={loadingAddData}
                            onClick={handleAddNewStaffMember}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddNewStaff;
