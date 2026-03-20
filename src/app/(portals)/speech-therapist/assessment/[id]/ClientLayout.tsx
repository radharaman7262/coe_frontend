import React, { ReactNode } from 'react';

import CaseHeader from '@/components/shared/CaseHeader';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    return (
        <div className={styles['page-container']}>
            <CaseHeader />
            <div className={styles['content-part']}>{children}</div>
        </div>
    );
};

export default ClientLayout;
