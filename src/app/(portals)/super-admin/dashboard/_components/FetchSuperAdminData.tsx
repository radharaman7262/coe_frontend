import {
    getSupAdminCenterOverViewCall,
    getSupAdminCompilApiCall,
    getSupAdminRecentActivityCall,
    getSupAdminStatsApiCall,
} from '../utils';

import { StatsListType } from './CardContainer/type';
import { DashboardOverviewData } from './CenterUserOverView/type';
import { DashboardTrackerData } from './CompilenceTracker/type';
import { RecentActivityDataType } from './RecentActivity/type';

import SuperAdminDashboardPage from './index';

const FetchSuperAdminDashboard = async () => {
    const compilenceTrackerPromise = await getSupAdminCompilApiCall();
    const statsPromise = await getSupAdminStatsApiCall();
    const centerOverViewPromise = await getSupAdminCenterOverViewCall();
    const recentActivityPromise = await getSupAdminRecentActivityCall();

    const [
        compilenceTrackerResponse,
        statsResponse,
        centerOverViewResponse,
        recentActivityResponse,
    ] = await Promise.all([
        compilenceTrackerPromise,
        statsPromise,
        centerOverViewPromise,
        recentActivityPromise,
    ]);

    const { response: CompilenceTrackerList = [] }: { response?: DashboardTrackerData[] } =
        compilenceTrackerResponse || {};

    const { response: StatsList }: { response?: StatsListType } = statsResponse || {};

    const { response: CenterUserOverViewList = [] }: { response?: DashboardOverviewData[] } =
        centerOverViewResponse || {};

    const { response: RecentActivityList = [] }: { response?: RecentActivityDataType[] } =
        recentActivityResponse || {};

    return (
        <SuperAdminDashboardPage
            CompilenceTrackerData={CompilenceTrackerList}
            StatsListData={StatsList}
            CenterUserOverViewData={CenterUserOverViewList}
            RecentActivityList={RecentActivityList}
        />
    );
};

export default FetchSuperAdminDashboard;
