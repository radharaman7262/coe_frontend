import AdminDashboardPage from './index';

import {
    getAdminRecentActivityCall,
    getAdminStatsApiCall,
    getUpComingSessionsApiCall,
} from '../utils';

import { StatsAdminListType } from './CardContainer/type';
import { UpcomingSessionListType } from './UpcomingSessions/type';

const FetchAdminDashboard = async () => {
    const statsPromise = await getAdminStatsApiCall();

    const upcomingSessionsPromise = await getUpComingSessionsApiCall();

    const recentActivityPromise = await getAdminRecentActivityCall();

    const [statsResponse, upcomingSessionsResponse, recentActivityResponse] = await Promise.all([
        statsPromise,
        upcomingSessionsPromise,
        recentActivityPromise,
    ]);

    const {
        response: statsList = { staff: '0', sessionConducted: '0', students: '0' },
    }: { response: StatsAdminListType } = statsResponse || {};

    const { response: upcomingSessions } = upcomingSessionsResponse || {};

    const { data: upcomingSessionsList = [] }: { data: UpcomingSessionListType[] } =
        upcomingSessions || {};

    const { response: recentActivityData = [] } = recentActivityResponse || {};

    return (
        <AdminDashboardPage
            recentActivityData={recentActivityData}
            statsListData={statsList}
            upcomingSessionList={upcomingSessionsList}
        />
    );
};

export default FetchAdminDashboard;
