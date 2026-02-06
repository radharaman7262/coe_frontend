import React from 'react';

import Modal from '@/components/shared/Modal';

import { MODAL_STYLING } from '@/constant/appConstants';

import { Text, Input, Button } from '@/components/index';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import { KeyboardEvent } from '@/constant/enumConstant';

import { MAX_LENGTHS, MIN_LENGTHS, USERTYPE_TEXT as text, VALIDATION_RULES } from './constant';

import { FormValues, UserTypeFormKeys, UserTypeProps } from './type';

import styles from './styles.module.scss';

const UserTypeModal = ({
    open,
    setOpen,
    formValues,
    setFormValues,
    onSubmit,
    isEditMode,
}: UserTypeProps) => {
    const [errors, setErrors] = React.useState<Partial<Record<UserTypeFormKeys, string>>>({});

    const updateFormValue = <K extends UserTypeFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChange =
        (field: UserTypeFormKeys) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            let { value } = e.target;

            value = value.replace(NO_LEADING_SPACES_REGEX, '');

            const rule = VALIDATION_RULES[field];
            if (rule?.regex && value && !rule.regex.test(value)) {
                return;
            }

            const minLength = MIN_LENGTHS[field];
            const maxLength = MAX_LENGTHS[field];

            if (value.length > maxLength) {
                return;
            }

            if (value.length > 0 && value.length < minLength) {
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

    const isCreateDisabled =
        !!errors[UserTypeFormKeys.USER_TYPE] || formValues.userType.trim().length < 3;

    return (
        <Modal open={open} setOpen={setOpen} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.body}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.userType1}
                        </Text>
                        <Input
                            value={formValues[UserTypeFormKeys.USER_TYPE]}
                            name={UserTypeFormKeys.USER_TYPE}
                            placeholder={text.enterUserType}
                            onChange={handleChange(UserTypeFormKeys.USER_TYPE)}
                            error={Boolean(errors[UserTypeFormKeys.USER_TYPE])}
                            helperText={errors[UserTypeFormKeys.USER_TYPE]}
                            onKeyDown={(e) => {
                                if (e.key === KeyboardEvent.ENTER && !isCreateDisabled) {
                                    onSubmit();
                                }
                            }}
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
                        label={isEditMode ? text.updateUserType : text.addUserType}
                        variant={ButtonVariant.SOLID}
                        color='white'
                        StartIcon={!isEditMode && <PlusIcon />}
                        className={styles.button}
                        disabled={isCreateDisabled}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default UserTypeModal;
