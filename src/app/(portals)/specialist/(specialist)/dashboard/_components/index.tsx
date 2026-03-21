import React from 'react';

import { StatsSpecialEducatorListType } from './CardContainer/type';

import CardContainer from './CardContainer';

import styles from './styles.module.scss';
// import { DashboardActivityResponse } from './RecentActivity/type';
// import RecentActivity from './RecentActivity';
import { UpcomingSessionListType } from './UpcomingSessions/type';
import UpcomingSessions from './UpcomingSessions';
import { StudentType } from './MyStudents/type';
import MyStudents from './MyStudents';

interface specialEducatorDashboardType {
    statsListData: StatsSpecialEducatorListType;
    upcomingSessionList: UpcomingSessionListType[];
    myStudentsData: StudentType[];
}

const SpecialEducatorDashboardPage = (props: specialEducatorDashboardType) => {
    const { statsListData, upcomingSessionList, myStudentsData } = props;

    return (
        <div className={styles['main-container']}>
            <div className={styles['left-section']}>
                <CardContainer statsListData={statsListData} />
                <div className={styles['tracker-overview-wrapper']}>
                    <UpcomingSessions upcomingSessionList={upcomingSessionList} />
                </div>
            </div>

            <div className={styles['right-section']}>
                <MyStudents studentData={myStudentsData} />
            </div>
        </div>
    );
};
export default SpecialEducatorDashboardPage;
