import {
    getSpecialEducatorMyStudentCall,
    getSpecialEducatorStatsApiCall,
    getSpecialEducatorUpComingSessionsApiCall,
} from '../utils';

import { StatsSpecialEducatorListType } from './CardContainer/type';
import PsychologistDashboardPage from './index';
import { UpcomingSessionListType } from './UpcomingSessions/type';

const FetchSpecialEducatorDashboard = async () => {
    const statsPromise = await getSpecialEducatorStatsApiCall();

    const upcomingSessionsPromise = await getSpecialEducatorUpComingSessionsApiCall();

    const myStudentsPromise = await getSpecialEducatorMyStudentCall();

    const [statsResponse, upcomingSessionsResponse, myStudentsResponse] = await Promise.all([
        statsPromise,
        upcomingSessionsPromise,
        myStudentsPromise,
    ]);

    const {
        response: statsList = { assignedStudents: '0', goalNotSet: '0', assessmentPending: '0' },
    }: { response: StatsSpecialEducatorListType } = statsResponse || {};

    const { response: upcomingSessions } = upcomingSessionsResponse || {};

    const { data: upcomingSessionsList = [] }: { data: UpcomingSessionListType[] } =
        upcomingSessions || {};

    const { response: myStudentsData = [] } = myStudentsResponse || {};

    return (
        <PsychologistDashboardPage
            myStudentsData={myStudentsData}
            statsListData={statsList}
            upcomingSessionList={upcomingSessionsList}
        />
    );
};

export default FetchSpecialEducatorDashboard;
