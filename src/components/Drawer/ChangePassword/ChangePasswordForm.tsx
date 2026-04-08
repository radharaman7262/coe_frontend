'use client';

import React, { useRef, useState, ChangeEvent } from 'react';

import Text from '@/components/ui/Text';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import EyeOnIcon from '@/public/assets/svg/eye-on-icon.svg';
import EyeOffIcon from '@/public/assets/svg/eye-off-icon.svg';
import CheckIcon from '@/public/assets/svg/check-icon-black.svg';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import {
    ChangePasswordFormKeys,
    ChangePasswordFormType,
    ErrorMessagesType,
} from '@/types/changePasswordFormType';

import { PASSWORD_PATTERN } from '@/utils/regex';

import { CHANGE_PASSWORD_PAGE_DATA as text, INITIAL_STATE } from './constant';

import styles from './styles.module.scss';

const ChangePasswordForm = () => {
    const [formValues, setFormValues] = useState<ChangePasswordFormType>(INITIAL_STATE);

    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const oldPasswordRef = useRef<HTMLInputElement | null>(null);
    const newPasswordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [ChangePasswordFormKeys.OLD_PASSWORD]: newPasswordRef,
        [ChangePasswordFormKeys.NEW_PASSWORD]: confirmPasswordRef,
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        let error = '';

        if (name === ChangePasswordFormKeys.NEW_PASSWORD) {
            if (value && !PASSWORD_PATTERN.test(value)) {
                error = 'invalid';
            }
        }

        if (name === ChangePasswordFormKeys.CONFIRM_PASSWORD) {
            if (value && value !== formValues.newPassword) {
                error = 'Passwords do not match';
            }
        }

        if (name === ChangePasswordFormKeys.NEW_PASSWORD) {
            if (formValues.confirmPassword && value !== formValues.confirmPassword) {
                setErrorMessages((prev) => ({
                    ...prev,
                    confirmPassword: 'Passwords do not match',
                }));
            } else {
                setErrorMessages((prev) => ({
                    ...prev,
                    confirmPassword: '',
                }));
            }
        }

        setErrorMessages((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;

            const nextInputRef = INPUT_MAPPING[target.name];

            if (nextInputRef?.current) {
                nextInputRef.current.focus();
            }
        }
    };

    const handleToggle = (field: 'old' | 'new' | 'confirm') => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const isFormValid =
        formValues.oldPassword.trim() !== '' &&
        formValues.newPassword.trim() !== '' &&
        formValues.confirmPassword.trim() !== '' &&
        formValues.newPassword === formValues.confirmPassword &&
        !errorMessages.newPassword &&
        !errorMessages.confirmPassword;

    const password = formValues.newPassword;

    const passwordChecks = {
        minLength: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[^A-Za-z0-9]/.test(password),
    };

    return (
        <div className={styles['changepassword-wrapper']}>
            <div className={styles['heading-container']}>
                <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                    {text.changePassword}
                </Text>

                <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]} color='text-idle'>
                    {text.setNewPassword}
                </Text>
            </div>

            <div className={styles['changepassword-form']}>
                <div className={styles['input-container']}>
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        {text.oldPassword}
                    </Text>

                    <Input
                        ref={oldPasswordRef}
                        name={ChangePasswordFormKeys.OLD_PASSWORD}
                        placeholder='Enter your old password'
                        value={formValues.oldPassword}
                        EndAdornment={showPassword.old ? EyeOnIcon : EyeOffIcon}
                        type={showPassword.old ? 'text' : 'password'}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClickEnd={() => handleToggle('old')}
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        {text.newPassword}
                    </Text>

                    <Input
                        ref={newPasswordRef}
                        name={ChangePasswordFormKeys.NEW_PASSWORD}
                        placeholder='Enter your new password'
                        value={formValues.newPassword}
                        EndAdornment={showPassword.new ? EyeOnIcon : EyeOffIcon}
                        type={showPassword.new ? 'text' : 'password'}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClickEnd={() => handleToggle('new')}
                        error={!!errorMessages.newPassword}
                        helperText=''
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        {text.confirmPassword}
                    </Text>

                    <Input
                        ref={confirmPasswordRef}
                        name={ChangePasswordFormKeys.CONFIRM_PASSWORD}
                        placeholder='Enter your confirm password'
                        value={formValues.confirmPassword}
                        EndAdornment={showPassword.confirm ? EyeOnIcon : EyeOffIcon}
                        type={showPassword.confirm ? 'text' : 'password'}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClickEnd={() => handleToggle('confirm')}
                        error={!!errorMessages.confirmPassword}
                        helperText={errorMessages.confirmPassword}
                    />
                </div>

                <div className={styles['password-rules']}>
                    <div
                        className={`${styles.rule} ${passwordChecks.minLength ? styles.active : ''}`}
                    >
                        <CheckIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color={passwordChecks.minLength ? 'green-600' : 'gray-500'}
                        >
                            {text.minimum8characters}
                        </Text>
                    </div>

                    <div
                        className={`${styles.rule} ${passwordChecks.uppercase ? styles.active : ''}`}
                    >
                        <CheckIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color={passwordChecks.uppercase ? 'green-600' : 'gray-500'}
                        >
                            {text.atleast11uppercase}
                        </Text>
                    </div>

                    <div
                        className={`${styles.rule} ${passwordChecks.lowercase ? styles.active : ''}`}
                    >
                        <CheckIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color={passwordChecks.lowercase ? 'green-600' : 'gray-500'}
                        >
                            {text.atleast1lowercase}
                        </Text>
                    </div>

                    <div className={`${styles.rule} ${passwordChecks.number ? styles.active : ''}`}>
                        <CheckIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color={passwordChecks.number ? 'green-600' : 'gray-500'}
                        >
                            {text.atleast1number}
                        </Text>
                    </div>

                    <div
                        className={`${styles.rule} ${passwordChecks.specialChar ? styles.active : ''}`}
                    >
                        <CheckIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color={passwordChecks.specialChar ? 'green-600' : 'gray-500'}
                        >
                            {text.atleast1specialcharacter}
                        </Text>
                    </div>
                </div>

                <div className={styles['bottom-wrapper']}>
                    <Button
                        label={text.updatePassword}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        disabled={!isFormValid}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordForm;
