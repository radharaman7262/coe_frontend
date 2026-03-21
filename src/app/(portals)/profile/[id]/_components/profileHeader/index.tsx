'use client';

import React, { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Text } from '@/components/index';

import BackIcon from '@public/assets/svg/chevron-right.svg';
import DownIcon from '@public/assets/svg/chevron-down.svg';

import PlusIcon from '@public/assets/svg/black-plus.svg';
import CalendarIcon from '@public/assets/svg/small-calender.svg';

import { FontType } from '@/types/typographyCommon';

import useClickOutside from '@/hooks/useClickOutside';

import { PROFILE_HEADER_TEXT, QUICK_ACTIONS } from './constant';

import styles from './styles.module.scss';

interface profileHeaderType {
    portal: string;
}

const ProfileHeader = (props: profileHeaderType) => {
    const { portal } = props;

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const handleBackRedirection = () => {
        router.back();
    };

    const renderIcon = (type: string) => {
        switch (type) {
            case 'plus':
                return <PlusIcon />;
            case 'calendar':
                return <CalendarIcon />;
            default:
                return null;
        }
    };

    const handleQuickAction = () => {
        setOpen(!open);
    };

    useClickOutside(dropdownRef, () => setOpen(false));

    return (
        <div className={styles['header-container']}>
            <div className={styles['back-icon']} onClick={handleBackRedirection} aria-hidden='true'>
                <BackIcon className={styles.icon} />
                <Text
                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                    color='text-idle'
                >
                    {PROFILE_HEADER_TEXT.BACK}
                </Text>
            </div>
            {portal !== 'clinicalChecking' ? (
                <div className={styles['dropdown-wrapper']}>
                    <div
                        className={styles['dropdown-container']}
                        ref={dropdownRef}
                        onClick={handleQuickAction}
                        aria-hidden='true'
                    >
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='text-idle'
                        >
                            {PROFILE_HEADER_TEXT.QUICK_ACTIONS}
                        </Text>

                        <DownIcon />
                    </div>

                    {open && (
                        <div className={styles['dropdown-menu']}>
                            {QUICK_ACTIONS.map((item) => (
                                <div key={item.id} className={styles['dropdown-item']}>
                                    {renderIcon(item.icon)}
                                    <Text
                                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                        color='text-idle'
                                    >
                                        {item.label}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default ProfileHeader;
