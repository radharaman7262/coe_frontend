'use client';

import React, { memo, useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

import BoldDropDown from '@public/assets/svg/bold-dropdown.svg';
import LogoutIcon from '@/public/assets/svg/logout-icon.svg';

import LogoutModal from '@/components/Modal/LogOutModal';

import { BreadCrumb, Text } from '@components/index';

import { LoggedUserDetailType } from '@/types/LoggedUserDetailType';
import { FontType } from '@/types/typographyCommon';

import useClickOutside from '@/hooks/useClickOutside';

import { getUserDetails } from '@/utils/cookieInServer';

import { pageNameMap } from './pageName';

import styles from './styles.module.scss';

const AfterLoginHeader = () => {
    const [userDetails, setUserDetails] = useState<LoggedUserDetailType | null>(null);

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null!);

    useClickOutside(dropdownRef, () => setOpen(false));

    const handleLogoutClick = () => {
        setOpen(false);
        setIsLogoutModalOpen(true);
    };

    const PageName = pageNameMap[pathname];

    const getDetails = async () => {
        const user = (await getUserDetails()) || {};

        const details = typeof user === 'string' ? JSON.parse(user) : {};

        setUserDetails(details);
    };

    const { firstName, role } = userDetails || {};

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <div className={styles['container-wrapper']}>
                <BreadCrumb label={PageName} />

                <div className={styles['logged-user']}>
                    <hr />

                    <div className={styles['user-wrapper']} onMouseEnter={() => setOpen(true)}>
                        <div className={styles['logged-role']}>
                            <Text
                                font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                                color='black'
                            >
                                {firstName || '_'}
                            </Text>
                            <BoldDropDown />
                        </div>

                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='primary-cta'
                        >
                            {role?.name || '_'}
                        </Text>

                        {open && (
                            <div className={styles['logout-popup']}>
                                <div
                                    className={styles['logout-section']}
                                    onClick={handleLogoutClick}
                                    ref={dropdownRef}
                                    aria-hidden='true'
                                >
                                    <LogoutIcon />
                                    <Text
                                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                        color='black'
                                    >
                                        Log Out
                                    </Text>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <LogoutModal open={isLogoutModalOpen} setOpen={setIsLogoutModalOpen} />
        </>
    );
};

export default memo(AfterLoginHeader);
