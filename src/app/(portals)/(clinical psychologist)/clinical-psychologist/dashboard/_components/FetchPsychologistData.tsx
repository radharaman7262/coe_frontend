import {
    getClinicalPsychologistStatsApiCall,
    getPsychologistRecentActivityCall,
    getPsychologistUpComingSessionsApiCall,
} from '../utils';

import { StatsPsychologistListType } from './CardContainer/type';
import { UpcomingSessionListType } from './UpcomingSessions/type';
import PsychologistDashboardPage from './index';

const FetchPsychologistDashboard = async () => {
    const statsPromise = await getClinicalPsychologistStatsApiCall();

    const upcomingSessionsPromise = await getPsychologistUpComingSessionsApiCall();

    const recentActivityPromise = await getPsychologistRecentActivityCall();

    const [statsResponse, upcomingSessionsResponse, recentActivityResponse] = await Promise.all([
        statsPromise,
        upcomingSessionsPromise,
        recentActivityPromise,
    ]);

    const {
        response: statsList = { assessmentDue: 0, assignedStudents: '0', historyForm: '0' },
    }: { response: StatsPsychologistListType } = statsResponse || {};

    const { response: upcomingSessions } = upcomingSessionsResponse || {};

    const { data: upcomingSessionsList = [] }: { data: UpcomingSessionListType[] } =
        upcomingSessions || {};

    const { response: recentActivityData = [] } = recentActivityResponse || {};

    return (
        <PsychologistDashboardPage
            recentActivityData={recentActivityData}
            statsListData={statsList}
            upcomingSessionList={upcomingSessionsList}
        />
    );
};

export default FetchPsychologistDashboard;
