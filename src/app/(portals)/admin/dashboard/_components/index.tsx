import React from 'react';

import { StatsAdminListType } from './CardContainer/type';

import CardContainer from './CardContainer';
import RecentActivity from './RecentActivity';
import UpcomingSessions from './UpcomingSessions';

import styles from './styles.module.scss';

interface adminDashboardType {
    StatsListData: StatsAdminListType | undefined;
}

const AdminDashboardPage = (props: adminDashboardType) => {
    const { StatsListData } = props;

    return (
        <div className={styles['main-container']}>
            <div className={styles['left-section']}>
                <CardContainer StatsListData={StatsListData} />
                <div className={styles['tracker-overview-wrapper']}>
                    <UpcomingSessions />
                </div>
            </div>

            <div className={styles['right-section']}>
                <RecentActivity
                    RecentActivityList={[
                        {
                            date: '12-01-2026',
                            newUser: [
                                {
                                    id: '1',
                                    name: 'Aman Sharma',
                                    specialization: [
                                        {
                                            id: '1',
                                            name: 'Clinical Pschyologist',
                                        },
                                    ],
                                    center: 'Mother Grace Delhi',
                                    time: '2026-01-03 10:54:37',
                                },
                            ],
                            studentCaseAssigned: [
                                {
                                    studentId: '1',
                                    studentName: 'Aarav Sharma',
                                    user: 'Dr. Kapoor',
                                    specialization: [
                                        {
                                            id: '1',
                                            name: 'Clinical Pschyologist',
                                        },
                                    ],
                                    center: 'Mother Grace Delhi',
                                    time: '2026-01-03 10:54:37',
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    );
};
export default AdminDashboardPage;
