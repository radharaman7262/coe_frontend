'use client';

import React, { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import CaseHeader from '@/components/shared/CaseHeader';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className={styles['page-container']}>
            <CaseHeader onBackClick={handleBack} />
            <div className={styles['content-part']}>{children}</div>
        </div>
    );
};

export default ClientLayout;
