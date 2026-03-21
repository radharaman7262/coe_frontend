import callApi from '@/app/api/api';
import {
    SPECIAL_EDUCATOR_DASHBOARD_STATS,
    SPECIAL_EDUCATOR_MY_STUDENTS,
    SPECIAL_EDUCATOR_UPCOMING_SESSIONS,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getSpecialEducatorStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPECIAL_EDUCATOR_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSpecialEducatorUpComingSessionsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPECIAL_EDUCATOR_UPCOMING_SESSIONS,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};

export const getSpecialEducatorMyStudentCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPECIAL_EDUCATOR_MY_STUDENTS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
