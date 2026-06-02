import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { Button, Input, Text } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import MailIcon from '@/public/assets/svg/mail-icon.svg';
import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';

import { ForgotErrorMessageType, ForgotInFormKeys, ForgotInFormType } from '@/types/signInFormType';

import { AuthDrawerStep, KeyboardEvent } from '@/constant/enumConstant';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOGIN_PAGE_DATA as staticLabel } from '../constant';

import { checkAllValueValidOrNot, getResetPasswordLinkApiCall, validateInput } from './utils';

import styles from './styles.module.scss';

interface ForgotEmailType {
    forgotValues: ForgotInFormType;
    setForgotValues: React.Dispatch<React.SetStateAction<ForgotInFormType>>;
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
}

const ForgotEmail = (props: ForgotEmailType) => {
    const { forgotValues, setForgotValues, setStep } = props;
    const [errorMessages, setErrorMessages] = useState<ForgotErrorMessageType>({});
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const forgotPasswordRef = useRef<HTMLInputElement | null>(null);

    const updateFormValues = (key: ForgotInFormKeys, value: string) => {
        setForgotValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        validateInput(name as ForgotInFormKeys, value, setErrorMessages);
        updateFormValues(name as ForgotInFormKeys, value);
    };

    useEffect(() => {
        const isValid = checkAllValueValidOrNot({ forgotValues, errorMessages });

        setIsFormValid(isValid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forgotValues]);

    const handleForgotPassword = async () => {
        try {
            setLoading(true);

            const body = {
                email: forgotValues[ForgotInFormKeys.FORGOT_PASSWORD],
            };

            const response = await getResetPasswordLinkApiCall(body);

            const { status, error } = response || {};

            if (!status) {
                throw new Error(error);
            }

            setStep(AuthDrawerStep.LINK_SUCCESSFULL_SENT);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({
                type: 'error',
                message: errorMessage || 'Error',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === KeyboardEvent.ENTER) {
            if (isFormValid) {
                handleForgotPassword();
            }
        }
    };

    useEffect(() => {
        if (forgotPasswordRef.current) {
            forgotPasswordRef.current.focus();
        }
    }, []);

    return (
        <div className={styles['login-wrapper']}>
            <div className={styles['heading-container']}>
                <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                    {staticLabel.forgotpassword}
                </Text>
                <Text font={[FontType.text_md_regular, FontType.text_md_regular]} color='text-idle'>
                    {staticLabel.forgotdescription}
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
                        ref={forgotPasswordRef}
                        EndAdornment={MailIcon}
                        name={ForgotInFormKeys.FORGOT_PASSWORD}
                        placeholder={staticLabel.forgotMailPlaceholder}
                        value={forgotValues[ForgotInFormKeys.FORGOT_PASSWORD]}
                        error={!!errorMessages[ForgotInFormKeys.FORGOT_PASSWORD]}
                        helperText={errorMessages[ForgotInFormKeys.FORGOT_PASSWORD] || ''}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <Button
                    label={staticLabel?.getResetLink}
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['btn-class']}
                    EndIcon={!loading ? <RightIcon /> : null}
                    onClick={handleForgotPassword}
                    disabled={loading || !isFormValid}
                    loader={loading}
                />
            </div>
        </div>
    );
};

export default ForgotEmail;
