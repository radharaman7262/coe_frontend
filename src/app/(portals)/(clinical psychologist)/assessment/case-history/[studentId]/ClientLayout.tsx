'use client';

import React, { ReactNode, useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import CaseHeader from '@/components/shared/CaseHeader';

import CaseHistorySidebar from '@/components/shared/CaseHistorySidebar';

import {
    useGetCaseHistorySidebarList,
    useGetSpeechAssessmentSidebarList,
} from '@/app/(portals)/queries';

import { getClientUserDetails } from '@/utils/cookieManager';

import { ShimmerUiContainer } from '@/components';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const [specialization, setSpecialization] = useState<string>('');
    const { children } = props;

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const searchParams = useParams();

    const { studentId } = searchParams;

    useEffect(() => {
        const user = getClientUserDetails();

        if (user) {
            setSpecialization(user?.userSpecializations?.name || '');
        }
    }, []);

    const isSpeechTherapist = specialization === 'Speech Therapist';

    const { data: normaldata, isLoading: normalLoading } = useGetCaseHistorySidebarList(
        studentId as string,
    );

    const { data: speechtherapistdata, isLoading: speechLoading } =
        useGetSpeechAssessmentSidebarList(studentId as string);

    const data = isSpeechTherapist ? speechtherapistdata : normaldata;
    const isLoading = isSpeechTherapist ? speechLoading : normalLoading;

    const { response } = data || {};

    const { overallPercentage, tree } = response || {};

    return (
        <div className={styles.layout}>
            {isLoading ? (
                <ShimmerUiContainer className={styles['header-shimmer']} />
            ) : (
                <CaseHeader onBackClick={handleBack} />
            )}

            <div className={styles['lower-layout']}>
                {isLoading ? (
                    <ShimmerUiContainer className={styles['sidebar-shimmer']} />
                ) : (
                    <CaseHistorySidebar totalProgress={overallPercentage} menuList={tree} />
                )}
                {isLoading ? (
                    <ShimmerUiContainer className={styles['content-shimmer']} />
                ) : (
                    children
                )}
            </div>
        </div>
    );
};

export default ClientLayout;
