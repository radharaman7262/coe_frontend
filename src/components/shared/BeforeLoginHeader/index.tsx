'use client';

import React, { memo } from 'react';

import { Button } from '@components/index';

import RupantarIcon from '@public/assets/svg/rupantar-header-icon.svg';

import { ButtonVariant } from '@/types/typographyCommon';

import styles from './styles.module.scss';

const BeforeLoginHeader = () => {
    
    const handleLoggingIn = () => {
        //
    };

    const containerWrapperClass = styles['container-wrapper'];

    return (
        <div className={containerWrapperClass}>
            <RupantarIcon />

            <Button
                label='Log in'
                type='button'
                variant={ButtonVariant.SOLID}
                color='white'
                onClick={handleLoggingIn}
            />
        </div>
    );
};
export default memo(BeforeLoginHeader);
