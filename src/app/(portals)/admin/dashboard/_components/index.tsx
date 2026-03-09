import React from 'react';

import { StatsAdminListType } from './CardContainer/type';
import { UpcomingSessionListType } from './UpcomingSessions/type';

import CardContainer from './CardContainer';
import RecentActivity from './RecentActivity';
import UpcomingSessions from './UpcomingSessions';

import styles from './styles.module.scss';
import { DashboardActivityResponse } from './RecentActivity/type';

interface adminDashboardType {
    statsListData: StatsAdminListType;
    upcomingSessionList: UpcomingSessionListType[];
    recentActivityData: DashboardActivityResponse[];
}

const AdminDashboardPage = (props: adminDashboardType) => {
    const { statsListData, upcomingSessionList, recentActivityData } = props;

    return (
        <div className={styles['main-container']}>
            <div className={styles['left-section']}>
                <CardContainer statsListData={statsListData} />
                <div className={styles['tracker-overview-wrapper']}>
                    <UpcomingSessions upcomingSessionList={upcomingSessionList} />
                </div>
            </div>

            <div className={styles['right-section']}>
                <RecentActivity recentActivityData={recentActivityData} />
            </div>
        </div>
    );
};
export default AdminDashboardPage;
