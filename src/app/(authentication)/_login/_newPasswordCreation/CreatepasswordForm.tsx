'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState, ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

import Text from '@/components/ui/Text';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import EyeOnIcon from '@/public/assets/svg/eye-on-icon.svg';
import EyeOffIcon from '@/public/assets/svg/eye-off-icon.svg';
import CheckIcon from '@/public/assets/svg/check-icon-black.svg';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import {
    CreatePasswordFormKeys,
    CreatePasswordFormType,
    ErrorForgotMessagesType,
} from '@/types/changePasswordFormType';

import { PASSWORD_PATTERN } from '@/utils/regex';

import { ToastContainer } from 'react-toastify';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';
import { AuthDrawerStep } from '@/constant/enumConstant';
import { NEW_PASSWORD_PAGE_DATA as text } from './constant';

import { useCreatePassword } from './mutation';

import styles from './styles.module.scss';

interface createpassWordForm {
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
    formValues: CreatePasswordFormType;
    setFormValues: Dispatch<SetStateAction<CreatePasswordFormType>>;
}

const CreatePasswordForm = (props: createpassWordForm) => {
    const router = useRouter();

    const { formValues, setFormValues, setStep } = props;
    const [paramToken, setParamToken] = useState<string | null>(null);

    const [errorMessages, setErrorMessages] = useState<ErrorForgotMessagesType>({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState({
        new: false,
        confirm: false,
    });

    const newPasswordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const { mutate } = useCreatePassword({ setLoader: setLoading });

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [CreatePasswordFormKeys.NEW_PASSWORD]: confirmPasswordRef,
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        let error = '';

        if (name === CreatePasswordFormKeys.NEW_PASSWORD) {
            if (value && !PASSWORD_PATTERN.test(value)) {
                error = 'invalid';
            }
        }

        if (name === CreatePasswordFormKeys.CONFIRM_PASSWORD) {
            if (value && value !== formValues.newPassword) {
                error = 'Passwords do not match';
            }
        }

        if (name === CreatePasswordFormKeys.NEW_PASSWORD) {
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

    const handleToggle = (field: 'new' | 'confirm') => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleSubmit = () => {
        if (paramToken) {
            mutate(
                {
                    password: formValues.confirmPassword,
                    paramToken,
                },
                {
                    onSuccess: (data) => {
                        const { status, message } = data || {};

                        if (!status) {
                            throw new Error(message);
                        }

                        showToast({
                            type: 'success',
                            message: message || 'Password updated successfully',
                        });

                        setTimeout(() => {
                            setStep(AuthDrawerStep.LOGIN);
                            router.replace('/');
                        }, LOADING_TIME_DURATION);
                    },
                    onError: (error) => {
                        showToast({
                            type: 'error',
                            message: error?.message || 'Failed to update password',
                        });
                    },
                },
            );
        }
    };

    const isFormValid =
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;

            const nextInputRef = INPUT_MAPPING[target.name];

            if (nextInputRef?.current) {
                nextInputRef.current.focus();
            } else if (isFormValid) {
                handleSubmit();
            }
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setParamToken(params.get('token'));
    }, []);

    return (
        <>
            <div className={styles['changepassword-wrapper']}>
                <div className={styles['heading-container']}>
                    <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                        {text.createPassword}
                    </Text>

                    <Text
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        color='text-idle'
                    >
                        {text.setNewPassword}
                    </Text>
                </div>

                <div className={styles['changepassword-form']}>
                    <div className={styles['input-container']}>
                        <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                            {text.newPassword}
                        </Text>

                        <Input
                            ref={newPasswordRef}
                            name={CreatePasswordFormKeys.NEW_PASSWORD}
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
                            name={CreatePasswordFormKeys.CONFIRM_PASSWORD}
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

                        <div
                            className={`${styles.rule} ${passwordChecks.number ? styles.active : ''}`}
                        >
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
                            label={text.updatepassword}
                            type='button'
                            variant={ButtonVariant.SOLID}
                            color='white'
                            font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                            className={styles['btn-class']}
                            disabled={!isFormValid}
                            loader={loading}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default CreatePasswordForm;
