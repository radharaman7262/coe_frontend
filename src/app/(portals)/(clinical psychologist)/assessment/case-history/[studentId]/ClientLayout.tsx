'use client';

import React, { ReactNode } from 'react';

import { useParams } from 'next/navigation';

import CaseHeader from '@/components/shared/CaseHeader';

import CaseHistorySidebar from '@/components/shared/CaseHistorySidebar';

import { useGetCaseHistorySidebarList } from '@/app/(portals)/queries';

import { ShimmerUiContainer } from '@/components';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    const searchParams = useParams();

    const { studentId } = searchParams;

    const { data, isLoading } = useGetCaseHistorySidebarList(studentId as string);

    const { response } = data || {};

    const { overallPercentage, tree } = response || {};

    return (
        <div className={styles.layout}>
            {isLoading ? (
                <ShimmerUiContainer className={styles['header-shimmer']} />
            ) : (
                <CaseHeader />
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
