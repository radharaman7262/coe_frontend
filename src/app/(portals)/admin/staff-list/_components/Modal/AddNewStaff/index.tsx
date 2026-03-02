import React, { useMemo, useState } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Button, Dropdown } from '@/components/index';

import CrossIcon from '@public/assets/svg/cross-icon.svg';
import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { MODAL_STYLING } from '@/constant/appConstants';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { RoleType } from '@/types/roleType';

import { useGetRoleMasterList } from '@/app/(portals)/super-admin/(user-management)/role-master/queries';

import { useGetLanguageList } from '@/app/(portals)/queries';

import { useGetSpecializationDropDownList } from '@/app/(portals)/super-admin/center-admin/queries';

import { filterList, CENTER_ADMIN_TEXT as text } from './constant';

import { AddAdminStaffProps, AdminStaffFormKeys } from './type';

import styles from './styles.module.scss';

const AddNewStaff = ({ open, setOpen, formValues }: AddAdminStaffProps) => {
    const [roleListDropDownFilter, setRoleListDropDownFilter] = useState<string>('');

    const [specializationDropDownFilter, setSpecializationDropDownFilter] = useState<string>('');

    const [languageDropDownFilter, setLanguageDropDownFilter] = useState<string>('');

    const { isLoading: roleMasterLoader, data: roleMasterListResponse } = useGetRoleMasterList();

    const { response: roleMasterList = [] }: { response: RoleType[] } =
        roleMasterListResponse || {};

    const { isLoading: specializedLoader, data } = useGetSpecializationDropDownList();

    const { response: specializationList } = data || [];

    const { isLoading: languageLoader, data: languageData } = useGetLanguageList();

    const { data: languageResponse } = languageData?.response || [];

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

    return (
        <Modal open={open} setOpen={setOpen} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                        {text.addNewProfessional}
                    </Text>
                    <CrossIcon />
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
                            <Dropdown label='Gender' options={[]} selectValue='name' value={[]} />
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
                            <Dropdown
                                label={text.selectLanguage}
                                options={filteredLanguage}
                                selectValue='name'
                                value={[]}
                                loading={languageLoader}
                                isSearchable
                                searchFilter={specializationDropDownFilter}
                                handleSearch={handleLanguageFilterSearch}
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
                                value={[]}
                                loading={roleMasterLoader}
                                isSearchable
                                searchFilter={specializationDropDownFilter}
                                handleSearch={handleRoleFilterSearch}
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
                            <Dropdown
                                label={text.selectSpecialization}
                                options={filteredSpecialization}
                                selectValue='name'
                                value={[]}
                                isSearchable
                                searchFilter={specializationDropDownFilter}
                                handleSearch={handleSpecializationFilterSearch}
                                loading={specializedLoader}
                            />
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <Button
                            label={text.create}
                            variant={ButtonVariant.SOLID}
                            color='white'
                            StartIcon={<PlusIcon />}
                            className={styles.button}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddNewStaff;
