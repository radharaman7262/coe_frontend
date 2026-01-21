import React from 'react';

import RecentActivity from './RecentActivity';
import CompilenceTracker from './CompilenceTracker';
import CenterUserOverView from './CenterUserOverView';
import CardContainer from './CardContainer';

import { DashboardTrackerData } from './CompilenceTracker/type';
import { StatsListType } from './CardContainer/type';
import { DashboardOverviewData } from './CenterUserOverView/type';
import { RecentActivityDataType } from './RecentActivity/type';

import styles from './styles.module.scss';

interface SuperAdminDashboardType {
    CompilenceTrackerData: DashboardTrackerData[];
    StatsListData: StatsListType | undefined;
    CenterUserOverViewData: DashboardOverviewData[];
    RecentActivityList: RecentActivityDataType[];
}

const SuperAdminDashboardPage = (props: SuperAdminDashboardType) => {
    const { CompilenceTrackerData, StatsListData, CenterUserOverViewData, RecentActivityList } =
        props;
    return (
        <div className={styles['main-container']}>
            <div className={styles['left-section']}>
                <CardContainer StatsListData={StatsListData} />
                <div className={styles['tracker-overview-wrapper']}>
                    <CompilenceTracker data={CompilenceTrackerData} />
                    <CenterUserOverView data={CenterUserOverViewData} />
                </div>
            </div>

            <div className={styles['right-section']}>
                <RecentActivity RecentActivityList={RecentActivityList} />
            </div>
        </div>
    );
};
export default SuperAdminDashboardPage;
