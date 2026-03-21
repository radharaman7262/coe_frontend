import React from 'react';

import StudentComponentPage from '.';

import {
    getAssesmentsDetailApiCall,
    getGoalSubGoalsApiCall,
    getRemarkDetailApiCall,
    getSessionLogApiCall,
    getStudentDetailApiCall,
} from './utils';

import {
    goalTrackerType,
    sessionLogType,
    studentAssesmentType,
    studentPersonalType,
    studentRemarkType,
} from './type';

import { STUDENT_PROFILE_DATA } from './constant';

const FetchProfilePage = async ({ id, portal }: { id: string; portal: string }) => {
    const studentProfilePromise = await getStudentDetailApiCall(id);
    const studentAssesmentPromise = await getAssesmentsDetailApiCall(id);
    const studentRemarkPromise = await getRemarkDetailApiCall(id);
    const studentGoalSubGoalPromise = await getGoalSubGoalsApiCall(id);
    const studentSessionLogPromise = await getSessionLogApiCall(id);

    const [
        studentProfileResponse,
        studentAssesmentResponse,
        studentRemarkResponse,
        studentgoalSubGoalResponse,
        studentSessionLogResponse,
    ] = await Promise.all([
        studentProfilePromise,
        studentAssesmentPromise,
        studentRemarkPromise,
        studentGoalSubGoalPromise,
        studentSessionLogPromise,
    ]);

    const {
        response: studentProfileList = STUDENT_PROFILE_DATA,
    }: { response?: studentPersonalType } = studentProfileResponse || {};

    const { response: studentAssesmentList = [] }: { response?: studentAssesmentType[] } =
        studentAssesmentResponse || {};

    const { response: studentRemarkList = [] }: { response?: studentRemarkType[] } =
        studentRemarkResponse || {};

    const { response: studentGoalSubGoalList = [] }: { response?: goalTrackerType[] } =
        studentgoalSubGoalResponse || {};

    const { response: studentSessionList = [] }: { response?: sessionLogType[] } =
        studentSessionLogResponse || {};

    return (
        <StudentComponentPage
            studentProfileList={studentProfileList}
            studentAssesmentList={studentAssesmentList}
            studentRemarkList={studentRemarkList}
            studentGoalSubGoalList={studentGoalSubGoalList}
            studentSessionList={studentSessionList}
            portal={portal}
            id={id}
        />
    );
};

export default FetchProfilePage;
