'use client';

import React, { useState } from 'react';

import { Toaster } from '@/components/index';

import { AuthDrawerStep } from '@/constant/enumConstant';

import { ForgotInFormType, SignInFormType } from '@/types/signInFormType';
import { LoggedRoleType } from '@/types/roleType';

import LoginForm from './LoginForm';
import RoleSelection from './RoleSelection';
import ForgotEmail from './_forgotPassword/ForgotEmail';
import EmailSent from './_emailSent';
import NewPasswordCreation from './_newPasswordCreation';

interface LoginPropsType {
    openLoginDrawer: boolean;
    step: AuthDrawerStep;
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
    formValues: SignInFormType;
    setFormValues: React.Dispatch<React.SetStateAction<SignInFormType>>;
    setSelectSpecialization: React.Dispatch<React.SetStateAction<LoggedRoleType | null>>;
    selectSpecialization: LoggedRoleType | null;
    forgotValues: ForgotInFormType;
    setForgotValues: React.Dispatch<React.SetStateAction<ForgotInFormType>>;
}

const Login = ({
    openLoginDrawer,
    step,
    setStep,
    formValues,
    setFormValues,
    setSelectSpecialization,
    selectSpecialization,
    forgotValues,
    setForgotValues,
}: LoginPropsType) => {
    const [multiSelectionUser, setMultiSelectionUser] = useState<LoggedRoleType[] | null>(null);

    if (!openLoginDrawer) return null;

    const renderStep = () => {
        switch (step) {
            case AuthDrawerStep.LOGIN:
                return (
                    <LoginForm
                        openLoginDrawer={openLoginDrawer}
                        setStep={setStep}
                        formValues={formValues}
                        setFormValues={setFormValues}
                        setMultiSelectionUser={setMultiSelectionUser}
                    />
                );

            case AuthDrawerStep.ROLE_SELECTION:
                return (
                    <RoleSelection
                        multiSelectionUser={multiSelectionUser}
                        selectSpecialization={selectSpecialization}
                        setSelectSpecialization={setSelectSpecialization}
                        formValues={formValues}
                    />
                );
            case AuthDrawerStep.FORGOT_PASSWORD_SCREEN:
                return (
                    <ForgotEmail
                        forgotValues={forgotValues}
                        setForgotValues={setForgotValues}
                        setStep={setStep}
                    />
                );

            case AuthDrawerStep.LINK_SUCCESSFULL_SENT:
                return <EmailSent forgotValues={forgotValues} setStep={setStep} />;

            case AuthDrawerStep.PASSWORD_CREATION:
                return <NewPasswordCreation setStep={setStep} />;

            default:
                return null;
        }
    };

    return (
        <>
            {renderStep()}
            <Toaster />
        </>
    );
};

export default Login;
