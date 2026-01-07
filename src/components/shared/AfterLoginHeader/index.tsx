'use client';

import React, { memo } from 'react';

import { usePathname } from 'next/navigation';

import { BreadCrumb, Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import BoldDropDown from '@public/assets/svg/bold-dropdown.svg';

import { pageNameMap } from './pageName';

import styles from './styles.module.scss';

const AfterLoginHeader = () => {
    const pathname = usePathname();

    const containerWrapperClass = styles['container-wrapper'];

    const PageName = pageNameMap[pathname];

    return (
        <div className={containerWrapperClass}>
            <BreadCrumb label={PageName} />

            <div className={styles['logged-user']}>
                <hr />
                <div>
                    <div className={styles['logged-role']}>
                        <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='black'>
                            {/* Comes Dynamic */}
                            Super Admin
                        </Text>
                        <BoldDropDown />
                    </div>
                    <Text
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        color='primary-cta'
                    >
                        {/* Comes Dynamic */}
                        SuperAdmin
                    </Text>
                </div>
            </div>
        </div>
    );
};
export default memo(AfterLoginHeader);
