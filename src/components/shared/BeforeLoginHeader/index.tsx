'use client';

import React, { memo, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@components/index';

import MothersGraceLogo from '@public/assets/svg/mothers-grace-logo.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useUserContext } from '@/app/(landing-page)/_contextProvider';

import { JWT_TOKEN } from '@/utils/cookieManager';
import { getCookie } from '@/utils/cookieInServer';

import styles from './styles.module.scss';

const BeforeLoginHeader = () => {
    const router = useRouter();

    const [hasToken, setHasToken] = useState<boolean>(false);

    const { setOpenLoginDrawer } = useUserContext();

    const handleLoggingIn = () => {
        setOpenLoginDrawer(true);
    };

    const getToken = async () => {
        const token = await getCookie(JWT_TOKEN);

        if (token) {
            setHasToken(true);
        }
    };

    const handleGoToHome = () => {
        router.push('/super-admin/dashboard');
    };

    const containerWrapperClass = styles['container-wrapper'];

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div className={containerWrapperClass}>
            <MothersGraceLogo />

            {hasToken ? (
                <Button
                    label='Go to Home'
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    onClick={handleGoToHome}
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['btn-class']}
                />
            ) : (
                <Button
                    label='Log In'
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    onClick={handleLoggingIn}
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['btn-class']}
                />
            )}
        </div>
    );
};
export default memo(BeforeLoginHeader);
