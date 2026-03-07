'use client';

import React, { ReactNode } from 'react';

import { useParams } from 'next/navigation';

import CaseHeader from '@/components/shared/CaseHeader';

import CaseHistorySidebar from '@/components/shared/CaseHistorySidebar';

import { useGetCaseHistorySidebarList } from '@/app/(portals)/queries';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    const searchParams = useParams();

    const { studentId } = searchParams;

    const { data } = useGetCaseHistorySidebarList(studentId as string);

    const { response } = data || {};

    const { overallPercentage, tree } = response || {};

    return (
        <div className={styles.layout}>
            <CaseHeader age={20} name='Paras' gender='Male' />
            <div className={styles['lower-layout']}>
                <CaseHistorySidebar totalProgress={overallPercentage} menuList={tree} />
                {children}
            </div>
        </div>
    );
};

export default ClientLayout;
