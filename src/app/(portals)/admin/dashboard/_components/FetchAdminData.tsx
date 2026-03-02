import AdminDashboardPage from './index';

import {
    getAdminRecentActivityCall,
    getAdminStatsApiCall,
    getUpComingSessionsApiCall,
} from '../utils';

import { StatsAdminListType } from './CardContainer/type';

const FetchAdminDashboard = async () => {
    const statsPromise = await getAdminStatsApiCall();
    const UpcomingSessionsPromise = await getUpComingSessionsApiCall();
    const recentActivityPromise = await getAdminRecentActivityCall();

    const [statsResponse, upcomingSessionsResponse, recentActivityResponse] = await Promise.all([
        statsPromise,
        UpcomingSessionsPromise,
        recentActivityPromise,
    ]);

    console.warn(upcomingSessionsResponse, recentActivityResponse, 'upcomingSessionsResponse');

    const { response: StatsList }: { response?: StatsAdminListType } = statsResponse || {};

    return <AdminDashboardPage StatsListData={StatsList} />;
};

export default FetchAdminDashboard;
