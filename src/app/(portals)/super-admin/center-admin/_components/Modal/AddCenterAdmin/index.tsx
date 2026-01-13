import React, { useMemo, useRef } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Dropdown, Button } from '@/components/index';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';
import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { MODAL_STYLING } from '@/constant/appConstants';

import { KeyboardEvent } from '@/constant/enumConstant';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import {
    EMPTY_OPTIONS,
    CENTER_ADMIN_TEXT as text,
    CENTER_LIST,
    SPECIALIZATION_LIST,
} from './constant';

import {
    AddCenterAdminProps,
    CenterAdminFormKeys,
    CenterType,
    FormValues,
    SpecializationType,
} from './type';

import styles from './styles.module.scss';

const AddCenterAdmin = ({ open, setOpen, formValues, setFormValues }: AddCenterAdminProps) => {
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const phoneNoRef = useRef<HTMLInputElement | null>(null);
    const emailIdRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [CenterAdminFormKeys.FIRST_NAME]: lastNameRef,
        [CenterAdminFormKeys.LAST_NAME]: phoneNoRef,
        [CenterAdminFormKeys.PHONE_NO]: emailIdRef,
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

    const filteredSpecialization = useMemo(
        () =>
            SPECIALIZATION_LIST.filter((admin) =>
                admin?.name.toLowerCase().includes(formValues.searchFilter.toLowerCase()),
            ),
        [formValues.searchFilter],
    );

    const filteredCenter = useMemo(
        () =>
            CENTER_LIST?.filter((admin) =>
                admin?.name.toLowerCase().includes(formValues.searchFilter.toLowerCase()),
            ),
        [formValues.searchFilter],
    );

    const isCreateDisabled =
        !formValues.firstName?.trim() ||
        !formValues.lastName?.trim() ||
        !formValues.emailId?.trim() ||
        !formValues.phoneNo?.trim() ||
        !formValues.selectedSpecialization;

    const updateFormValue = <K extends CenterAdminFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange =
        (field: CenterAdminFormKeys) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = e.target.value.replace(NO_LEADING_SPACES_REGEX, '');
            updateFormValue(field, value);
        };

    const handleSpecializationSelect = (item: SpecializationType | null) => {
        updateFormValue(CenterAdminFormKeys.SELECTED_SPECIALIZATION, item);
    };

    const handleCenterSelect = (item: CenterType | null) => {
        updateFormValue(CenterAdminFormKeys.SELECTED_CENTER, item);
    };

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
                                onChange={handleChange(CenterAdminFormKeys.FIRST_NAME)}
                                onKeyDown={handleKeyDown}
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
                                onChange={handleChange(CenterAdminFormKeys.LAST_NAME)}
                                onKeyDown={handleKeyDown}
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
                                onChange={handleChange(CenterAdminFormKeys.PHONE_NO)}
                                onKeyDown={handleKeyDown}
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
                                onChange={handleChange(CenterAdminFormKeys.EMAIL_ID)}
                                onKeyDown={handleKeyDown}
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
                            <Dropdown<{ id: number; name: string }>
                                label={text.centerAdmin}
                                options={EMPTY_OPTIONS}
                                selectValue='name'
                                value={null}
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
                                searchFilter={formValues[CenterAdminFormKeys.SEARCH_FILTER]}
                                handleSearch={handleChange(CenterAdminFormKeys.SEARCH_FILTER)}
                                onChange={handleSpecializationSelect}
                                searchStartIcon={SearchIcon}
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
                            searchFilter={formValues[CenterAdminFormKeys.SEARCH_FILTER]}
                            handleSearch={handleChange(CenterAdminFormKeys.SEARCH_FILTER)}
                            onChange={handleCenterSelect}
                            searchStartIcon={SearchIcon}
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
                        onClick={() => setOpen(false)}
                        color='gray-600'
                    />
                    <Button
                        label={text.create}
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

export default AddCenterAdmin;
