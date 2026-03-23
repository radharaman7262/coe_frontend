'use client';

import React, { useState } from 'react';

import { usePathname } from 'next/navigation';

import ArrowIcon from '@public/assets/svg/arrow-icon.svg';

import { AppRoutes } from '@/constant/appRoutes';

import AssignSpecialistDrawer from '@/app/(portals)/(clinical psychologist)/clinical-psychologist/AssignSpecialist';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { Button, Text } from '@/components/index';

import { getStudentDetail } from '@/utils/cookieManager';

import styles from './styles.module.scss';

const CaseHeader = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const basePath = pathname?.split('/')?.slice(0, -1)?.join('/') || '/';

    const detail = getStudentDetail();

    const userDetail = detail ? JSON.parse(detail) : {};

    const { studentName, gender } = userDetail;

    const handleClose = () => {
        setOpen(false);
    };

    const handleAssign = () => {
        setOpen(true);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.detail}>
                    <ArrowIcon />
                    <div className={styles.profile}>
                        <Text
                            tagType='div'
                            font={[FontType.text_lg_bold, FontType.text_lg_bold]}
                            color='white'
                            className={styles.avatar}
                        >
                            {studentName?.charAt(0) ?? 'U'}
                        </Text>

                        <div className={styles.info}>
                            <Text
                                tagType='p'
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            >
                                {studentName}
                            </Text>
                            <Text
                                tagType='p'
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            >
                                {/* {age}y /  */}
                                {gender}
                            </Text>
                        </div>
                    </div>
                </div>
                {basePath === `/${AppRoutes.ASSESSMENT_CASE_HISTORY}` && (
                    <Button
                        label='Assign'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        onClick={handleAssign}
                    />
                )}
            </div>
            <AssignSpecialistDrawer open={open} handleClose={handleClose} />
        </>
    );
};

export default CaseHeader;
