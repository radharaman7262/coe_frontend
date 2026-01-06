'use client';

import React, { memo } from 'react';

import { Button } from '@components/index';

import RupantarIcon from '@public/assets/svg/rupantar-header-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useUserContext } from '@/app/(landing-page)/_contextProvider';

import styles from './styles.module.scss';

const BeforeLoginHeader = () => {
    const { setOpenLoginDrawer } = useUserContext();

    const handleLoggingIn = () => {
        setOpenLoginDrawer(true);
    };

    const containerWrapperClass = styles['container-wrapper'];

    return (
        <div className={containerWrapperClass}>
            <RupantarIcon />

            <Button
                label='Login'
                type='button'
                variant={ButtonVariant.SOLID}
                color='white'
                onClick={handleLoggingIn}
                font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                className={styles['btn-class']}
            />
        </div>
    );
};
export default memo(BeforeLoginHeader);
