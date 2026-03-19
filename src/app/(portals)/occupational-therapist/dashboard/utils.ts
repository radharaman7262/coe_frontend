import callApi from '@/app/api/api';
import {
    OCCUPATIONAL_THERAPIST_DASHBOARD_STATS,
    OCCUPATIONAL_THERAPIST_MY_STUDENTS,
    OCCUPATIONAL_THERAPIST_UPCOMING_SESSIONS,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getOccupationalTherapistStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: OCCUPATIONAL_THERAPIST_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getOccupationalTherapistUpComingSessionsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: OCCUPATIONAL_THERAPIST_UPCOMING_SESSIONS,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};

export const getOccupationalTherapistMyStudentCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: OCCUPATIONAL_THERAPIST_MY_STUDENTS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
