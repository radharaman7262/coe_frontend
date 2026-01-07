'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { Input, Text, Button } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import MailIcon from '@/public/assets/svg/mail-icon.svg';
import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import LockIcon from '@/public/assets/svg/lock-icon.svg';

import { ErrorMessagesType, SignInFormKeys, SignInFormType } from '@/types/signInFormType';

import { KeyboardEvent } from '@/constant/enumConstant';

import { showToast } from '@/components/ui/Toaster/constant';

import { encryptKey } from '@/utils/encryptKey';
import { checkAllValueValidOrNot, loginApiCall, validateInput } from './utils';

import { LOGIN_PAGE_DATA as staticLabel, BUTTON_TEXT as button, MAX_LENGTHS } from './constant';

import styles from './styles.module.scss';

interface LoginFormType {
    openLoginDrawer: boolean;
}

const LoginForm = (props: LoginFormType) => {
    const { openLoginDrawer } = props;

    const [formValues, setFormValues] = useState<SignInFormType>({
        [SignInFormKeys.NAME]: '',
        [SignInFormKeys.PASSWORD]: '',
    });

    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const userNameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [SignInFormKeys.NAME]: passwordRef,
    };

    const updateFormValues = (key: SignInFormKeys, value: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValues(name as SignInFormKeys, value);
            return;
        }

        if (value.length < MAX_LENGTHS[name as SignInFormKeys]) {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));

            validateInput(name as SignInFormKeys, value, setErrorMessages);
            updateFormValues(name as SignInFormKeys, value);
        }
    };

    const handleLogin = async () => {
        try {
            setLoading(true);

            const { email } = formValues;

            const encryptedUserName = encryptKey(email);

            const body = { ...formValues, [SignInFormKeys.NAME]: encryptedUserName };

            const response = await loginApiCall(body);

            const { isSuccess, error, data } = response;

            if (!isSuccess) {
                throw new Error(error);
            }

            console.warn(data);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'error', message: errorMessage });
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const targetInput = event.target as HTMLInputElement;

        if (event.key === KeyboardEvent.ENTER) {
            const nextInputRef = INPUT_MAPPING[targetInput.name];

            if (nextInputRef && nextInputRef.current) {
                nextInputRef.current.focus();
            } else if (isFormValid) {
                handleLogin();
            }
        }
    };

    useEffect(() => {
        if (userNameRef.current) {
            userNameRef.current.focus();
        }
    }, [openLoginDrawer]);

    useEffect(() => {
        const isValid = checkAllValueValidOrNot({ formValues, errorMessages });

        setIsFormValid(isValid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);

    return (
        <div className={styles['login-wrapper']}>
            <div className={styles['heading-container']}>
                <Text font={[FontType.display_Desktop_xmd_bold, FontType.display_Desktop_xmd_bold]}>
                    {staticLabel.heading}
                </Text>
                <Text
                    font={[
                        FontType.display_Desktop_xmd_regular,
                        FontType.display_Desktop_xmd_regular,
                    ]}
                >
                    {staticLabel.dashboardLogin}
                </Text>
            </div>

            <div className={styles['login-form']}>
                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {staticLabel.userNameLabel}
                    </Text>

                    <Input
                        ref={userNameRef}
                        EndAdornment={MailIcon}
                        name={SignInFormKeys.NAME}
                        placeholder={staticLabel.userNamePlaceholder}
                        value={formValues[SignInFormKeys.NAME]}
                        error={!!errorMessages[SignInFormKeys.NAME]}
                        helperText={errorMessages[SignInFormKeys.NAME] || ''}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {staticLabel.passwordLabel}
                    </Text>

                    <Input
                        EndAdornment={LockIcon}
                        ref={passwordRef}
                        name={SignInFormKeys.PASSWORD}
                        placeholder={staticLabel.passwordPlaceholder}
                        value={formValues[SignInFormKeys.PASSWORD]}
                        onChange={handleChange}
                        error={!!errorMessages[SignInFormKeys.PASSWORD]}
                        helperText={errorMessages[SignInFormKeys.PASSWORD] || ''}
                        onKeyDown={handleKeyDown}
                        type='password'
                    />
                </div>

                <div className={styles['form-remember']}>
                    <div className={styles['check-box']}>
                        <input type='checkbox' id='remember' />

                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {staticLabel.rememberMe}
                        </Text>
                    </div>
                    <Button
                        label={button.login}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        EndIcon={<RightIcon />}
                        onClick={handleLogin}
                        disabled={loading || !isFormValid}
                        loader={loading}
                    />
                </div>
            </div>

            <div className={styles['login-footer']}>
                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-idle'>
                    {staticLabel.copyRight} <strong>{staticLabel.rupantar}</strong>
                    {staticLabel.allRights}
                </Text>
            </div>
        </div>
    );
};

export default LoginForm;
