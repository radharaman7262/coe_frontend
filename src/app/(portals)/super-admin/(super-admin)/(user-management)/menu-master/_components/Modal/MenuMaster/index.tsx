import React, { useMemo, useRef } from 'react';

import Modal from '@/components/shared/Modal';

import { Text, Input, Checkbox, Button, Dropdown } from '@/components/index';

import { MODAL_STYLING } from '@/constant/appConstants';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';
import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { KeyboardEvent } from '@/constant/enumConstant';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import { FormValues, MenuMasterFormKeys, MenuMasterProps, ParentMenuType } from './type';

import { MAX_LENGTHS, MIN_LENGTHS, MENU_MASTER_TEXT as text, VALIDATION_RULES } from './constant';

import styles from './styles.module.scss';

const MenuMasterModal = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    menuMasterList,
    onSubmit,
    isEditMode,
    isParentChecked,
    setIsParentChecked,
}: MenuMasterProps) => {
    const [errors, setErrors] = React.useState<Partial<Record<MenuMasterFormKeys, string>>>({});

    const menuNameRef = useRef<HTMLInputElement | null>(null);
    const menuURLRef = useRef<HTMLInputElement | null>(null);
    const remarksRef = useRef<HTMLInputElement | null>(null);
    const priorityRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [MenuMasterFormKeys.MENU_NAME]: menuURLRef,
        [MenuMasterFormKeys.MENU_URL]: remarksRef,
        [MenuMasterFormKeys.REMARKS]: priorityRef,
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

    const updateFormValue = <K extends MenuMasterFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange =
        (field: MenuMasterFormKeys) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            let { value } = e.target;

            value = value.replace(NO_LEADING_SPACES_REGEX, '');

            if (field === MenuMasterFormKeys.PRIORITY) {
                value = value.replace(/[^0-9]/g, '');
            }

            const rule = VALIDATION_RULES[field];
            if (rule?.regex && value && !rule.regex.test(value)) {
                return;
            }

            const minLength = MIN_LENGTHS[field];
            const maxLength = MAX_LENGTHS[field];

            if (maxLength && value.length > maxLength) {
                return;
            }

            if (rule?.required && value.length > 0 && value.length < minLength) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: rule.errorMessage,
                }));
            } else {
                setErrors((prev) => ({
                    ...prev,
                    [field]: '',
                }));
            }

            updateFormValue(field, value);
        };

    const parentMenuOptions = useMemo<ParentMenuType[]>(
        () =>
            menuMasterList
                ?.filter((menu) => menu.isParent === '1')
                .map((menu) => ({
                    id: menu.id,
                    name: menu.menuName,
                })),
        [menuMasterList],
    );

    const filteredParentMenu = useMemo(() => {
        const search = (formValues.searchFilter ?? '').toLowerCase();

        return parentMenuOptions.filter((menu) => (menu.name ?? '').toLowerCase().includes(search));
    }, [parentMenuOptions, formValues.searchFilter]);

    const handleParentMenuSelect = (item: ParentMenuType | null) => {
        updateFormValue(MenuMasterFormKeys.SELECTED_PARENT_MENU, item);
    };

    const isCreateDisabled =
        !formValues.menuName?.trim() ||
        !formValues.menuURL?.trim() ||
        !String(formValues.priority ?? '').trim();

    return (
        <Modal open={open} setOpen={setOpen} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            {text.menuName}
                        </Text>
                        <Input
                            ref={menuNameRef}
                            value={formValues[MenuMasterFormKeys.MENU_NAME]}
                            name={MenuMasterFormKeys.MENU_NAME}
                            placeholder={text.enterMenuName}
                            onChange={handleChange(MenuMasterFormKeys.MENU_NAME)}
                            onKeyDown={handleKeyDown}
                            error={Boolean(errors[MenuMasterFormKeys.MENU_NAME])}
                            helperText={errors[MenuMasterFormKeys.MENU_NAME]}
                        />
                    </div>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            {text.menuURL}
                        </Text>
                        <Input
                            ref={menuURLRef}
                            value={formValues[MenuMasterFormKeys.MENU_URL]}
                            name={MenuMasterFormKeys.MENU_URL}
                            placeholder={text.addURL}
                            onChange={handleChange(MenuMasterFormKeys.MENU_URL)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.remarks}
                        </Text>
                        <Input
                            ref={remarksRef}
                            value={formValues[MenuMasterFormKeys.REMARKS]}
                            name={MenuMasterFormKeys.REMARKS}
                            placeholder={text.addRemarks}
                            onChange={handleChange(MenuMasterFormKeys.REMARKS)}
                            onKeyDown={handleKeyDown}
                            error={Boolean(errors[MenuMasterFormKeys.REMARKS])}
                            helperText={errors[MenuMasterFormKeys.REMARKS]}
                        />
                    </div>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            {text.priority}
                        </Text>
                        <Input
                            ref={priorityRef}
                            value={formValues[MenuMasterFormKeys.PRIORITY]}
                            name={MenuMasterFormKeys.PRIORITY}
                            placeholder={text.addPriority}
                            onChange={handleChange(MenuMasterFormKeys.PRIORITY)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.field}>
                            <Checkbox
                                isChecked={isParentChecked}
                                onChange={(value) => {
                                    setIsParentChecked(value);

                                    if (!value) {
                                        updateFormValue(
                                            MenuMasterFormKeys.SELECTED_PARENT_MENU,
                                            null,
                                        );
                                    }
                                }}
                            />
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='text-idle'
                            >
                                {text.isParent}
                            </Text>
                        </div>
                    </div>
                    {isParentChecked && (
                        <div className={styles.body}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='text-idle'
                            >
                                {text.chooseParentMenu}
                            </Text>

                            <Dropdown<ParentMenuType>
                                label={text.selectParentMenu}
                                options={filteredParentMenu}
                                selectValue='name'
                                value={formValues[MenuMasterFormKeys.SELECTED_PARENT_MENU]}
                                searchFilter={formValues[MenuMasterFormKeys.SEARCH_FILTER]}
                                handleSearch={handleChange(MenuMasterFormKeys.SEARCH_FILTER)}
                                onChange={handleParentMenuSelect}
                                searchStartIcon={SearchIcon}
                                isSearchable={false}
                            />
                        </div>
                    )}
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
                        label={!isEditMode ? text.addMenu : text.editMenu}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={<PlusIcon />}
                        className={styles.button}
                        disabled={isCreateDisabled}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default MenuMasterModal;
