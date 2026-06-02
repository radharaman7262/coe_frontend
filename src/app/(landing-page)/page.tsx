'use client';

import React, { useEffect, useState } from 'react';

import { Drawer } from '@/components';

import MothersGraceLogo from '@/public/assets/svg/mothers-grace-logo.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import { AuthDrawerStep } from '@/constant/enumConstant';
import { ForgotInFormType, SignInFormType } from '@/types/signInFormType';
import { LoggedRoleType } from '@/types/roleType';
import { useUserContext } from './_contextProvider';

import Login from '../(authentication)/_login';

import {
    FORGOT_INITIAL_STATE,
    INITIAL_STATE as loginInitialState,
} from '../(authentication)/_login/constant';

import styles from './styles.module.scss';

const Home = () => {
    const { openLoginDrawer, setOpenLoginDrawer } = useUserContext();

    const [step, setStep] = useState<AuthDrawerStep>(AuthDrawerStep.LOGIN);

    const [formValues, setFormValues] = useState<SignInFormType>(loginInitialState);
    const [selectSpecialization, setSelectSpecialization] = useState<LoggedRoleType | null>(null);

    const [forgotValues, setForgotValues] = useState<ForgotInFormType>(FORGOT_INITIAL_STATE);

    const [paramToken, setParamToken] = useState<string | null>(null);

    const handleClose = () => {
        setStep(AuthDrawerStep.LOGIN);
        setFormValues(loginInitialState);
        setSelectSpecialization(null);
        setOpenLoginDrawer(false);
    };

    useEffect(() => {
        if (paramToken) {
            setStep(AuthDrawerStep.PASSWORD_CREATION);
            setOpenLoginDrawer(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paramToken]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setParamToken(params.get('token'));
    }, []);

    return (
        <Drawer
            sx={{
                '& .MuiPaper-root': {
                    width: '600px',
                },
            }}
            anchor='right'
            setDrawerOpen={setOpenLoginDrawer}
            drawerOpen={openLoginDrawer}
        >
            {!paramToken && (
                <div className={styles['drawer-header']}>
                    <CrossIcon className={styles['cross-icon']} onClick={handleClose} />
                </div>
            )}
            <div className={styles['drawer-middle']}>
                <MothersGraceLogo className={styles.logo} />

                <Login
                    openLoginDrawer={openLoginDrawer}
                    step={step}
                    setStep={setStep}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    selectSpecialization={selectSpecialization}
                    setSelectSpecialization={setSelectSpecialization}
                    forgotValues={forgotValues}
                    setForgotValues={setForgotValues}
                />
            </div>
        </Drawer>
    );
};
export default Home;
