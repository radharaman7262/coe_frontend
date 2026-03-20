import { HTTP_METHOD } from '@/types/common';
import callApi from '@/app/api/api';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import {
    STUDENT_ASSESMENT_DETAIL,
    STUDENT_GOAL_SUBGOAL,
    STUDENT_PERSONAL_DETAIL,
    STUDENT_REMARK_DETAIL,
    STUDENT_SESSION_LOG,
} from '@/app/api/apiRoutes';

export const getStudentDetailApiCall = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${STUDENT_PERSONAL_DETAIL}${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getAssesmentsDetailApiCall = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${STUDENT_ASSESMENT_DETAIL}${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getRemarkDetailApiCall = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${STUDENT_REMARK_DETAIL}${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getGoalSubGoalsApiCall = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${STUDENT_GOAL_SUBGOAL}${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getSessionLogApiCall = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${STUDENT_SESSION_LOG}${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};
