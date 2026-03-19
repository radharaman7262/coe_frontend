'use client';

import React from 'react';

import { Button } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

const BottomNavbar = () => {
    const handleClick = () => {};

    return (
        <>
            <div className={styles['button-container']}>
                <Button
                    variant={ButtonVariant.OUTLINED}
                    color='gray-700'
                    label='Previous'
                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                    // className={styles.button}
                    onClick={() => {}}
                />
                <Button
                    variant={ButtonVariant.OUTLINED}
                    color='gray-700'
                    label='Next'
                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                    // className={styles.button}
                    onClick={handleClick}
                />
            </div>
            {/* <AssignSpecialistDrawer/> */}
        </>
    );
};

export default BottomNavbar;
