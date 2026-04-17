'use client';

import React, { useState } from 'react';

import { Drawer } from '@/components';

import MothersGraceLogo from '@/public/assets/svg/mothers-grace-logo.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import { AuthDrawerStep } from '@/constant/enumConstant';
import { SignInFormType } from '@/types/signInFormType';
import { LoggedRoleType } from '@/types/roleType';
import { useUserContext } from './_contextProvider';

import Login from '../(authentication)/_login';

import { INITIAL_STATE as loginInitialState } from '../(authentication)/_login/constant';

import styles from './styles.module.scss';

const Home = () => {
    const { openLoginDrawer, setOpenLoginDrawer } = useUserContext();

    const [step, setStep] = useState<AuthDrawerStep>(AuthDrawerStep.LOGIN);

    const [formValues, setFormValues] = useState<SignInFormType>(loginInitialState);
    const [selectSpecialization, setSelectSpecialization] = useState<LoggedRoleType | null>(null);

    const handleClose = () => {
        setStep(AuthDrawerStep.LOGIN);
        setFormValues(loginInitialState);
        setSelectSpecialization(null);
        setOpenLoginDrawer(false);
    };

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
            <div className={styles['drawer-header']}>
                <CrossIcon className={styles['cross-icon']} onClick={handleClose} />
            </div>
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
                />
            </div>
        </Drawer>
    );
};
export default Home;
