import React from 'react';

import { StatsPsychologistListType } from './CardContainer/type';
import { UpcomingSessionListType } from './UpcomingSessions/type';

import CardContainer from './CardContainer';

import UpcomingSessions from './UpcomingSessions';

import styles from './styles.module.scss';
import { DashboardActivityResponse } from './RecentActivity/type';
import RecentActivity from './RecentActivity';

interface psychologistDashboardType {
    statsListData: StatsPsychologistListType;
    upcomingSessionList: UpcomingSessionListType[];
    recentActivityData: DashboardActivityResponse[];
}

const PsychologistDashboardPage = (props: psychologistDashboardType) => {
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
export default PsychologistDashboardPage;
