'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

import BoldDropDown from '@public/assets/svg/bold-dropdown.svg';
import LogoutIcon from '@/public/assets/svg/log-out-icon.svg';
import ChangePasswordIcon from '@/public/assets/svg/change-password-icon.svg';

import LogoutModal from '@/components/Modal/LogOutModal';
import { BreadCrumb, Text } from '@components/index';

import { LoggedUserDetailType } from '@/types/LoggedUserDetailType';
import { FontType } from '@/types/typographyCommon';

import useClickOutside from '@/hooks/useClickOutside';
import { getUserDetails } from '@/utils/cookieInServer';

import { pageNameMap } from './pageName';

import styles from './styles.module.scss';

interface Props {
    onChangePassword: () => void;
}

const AfterLoginHeader = ({ onChangePassword }: Props) => {
    const [userDetails, setUserDetails] = useState<LoggedUserDetailType | null>(null);

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(dropdownRef, () => setOpen(false));

    const handleLogoutClick = () => {
        setOpen(false);
        setIsLogoutModalOpen(true);
    };

    const handleChangePassword = () => {
        setOpen(false);
        onChangePassword();
    };

    const PageName = pageNameMap[pathname];

    const getDetails = async () => {
        const user = (await getUserDetails()) || {};
        const details = typeof user === 'string' ? JSON.parse(user) : {};
        setUserDetails(details);
    };

    const { firstName, EducatorMaster, userSpecializations } = userDetails || {};

    const { name: educatorName } = EducatorMaster || {};

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <div className={styles['container-wrapper']}>
                <BreadCrumb label={PageName} />

                <div className={styles['logged-user']}>
                    <hr />

                    <div ref={dropdownRef}>
                        <button
                            type='button'
                            className={styles['user-wrapper']}
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <div className={styles['logged-role']}>
                                <Text
                                    font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                                    color='black'
                                >
                                    {firstName || educatorName || ''}
                                </Text>
                                <BoldDropDown />
                            </div>

                            <Text
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='primary-cta'
                            >
                                {userSpecializations?.[0]?.name || '_'}
                            </Text>
                        </button>

                        {open && (
                            <div className={styles['logout-popup']}>
                                <button
                                    type='button'
                                    className={styles['logout-section']}
                                    onClick={handleChangePassword}
                                >
                                    <ChangePasswordIcon />
                                    <Text
                                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                        color='black'
                                    >
                                        Change Password
                                    </Text>
                                </button>
                                <button
                                    type='button'
                                    className={styles['logout-section']}
                                    onClick={handleLogoutClick}
                                >
                                    <LogoutIcon />
                                    <Text
                                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                        color='black'
                                    >
                                        Log Out
                                    </Text>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <LogoutModal open={isLogoutModalOpen} setOpen={setIsLogoutModalOpen} />

            <ToastContainer />
        </>
    );
};

export default memo(AfterLoginHeader);
