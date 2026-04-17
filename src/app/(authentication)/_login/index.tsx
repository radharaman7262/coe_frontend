'use client';

import React, { useState } from 'react';

import { Toaster } from '@/components/index';

import { AuthDrawerStep } from '@/constant/enumConstant';

import { SignInFormType } from '@/types/signInFormType';
import { LoggedRoleType } from '@/types/roleType';

import LoginForm from './LoginForm';
import RoleSelection from './RoleSelection';
import ForgotEmail from './_forgotPassword/ForgotEmail';

interface LoginPropsType {
    openLoginDrawer: boolean;
    step: AuthDrawerStep;
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
    formValues: SignInFormType;
    setFormValues: React.Dispatch<React.SetStateAction<SignInFormType>>;
    setSelectSpecialization: React.Dispatch<React.SetStateAction<LoggedRoleType | null>>;
    selectSpecialization: LoggedRoleType | null;
}

const Login = ({
    openLoginDrawer,
    step,
    setStep,
    formValues,
    setFormValues,
    setSelectSpecialization,
    selectSpecialization,
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
                return <ForgotEmail />;

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
