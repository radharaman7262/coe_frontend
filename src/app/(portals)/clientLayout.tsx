'use client';

import { Sidebar, AfterLoginHeader } from '@/components';

import { SIDEBAR_MENU as menuList } from '@/components/shared/Sidebar/constant';

import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;
    return (
        <div className={styles['main-dashboard-layout']}>
            <aside>
                <Sidebar sideBarData={menuList} />
            </aside>

            <div className={styles.header}>
                <AfterLoginHeader />
                <main className={styles['main-children']}>{children}</main>
            </div>
        </div>
    );
};

export default ClientLayout;
