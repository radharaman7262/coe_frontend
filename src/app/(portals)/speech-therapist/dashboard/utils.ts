import callApi from '@/app/api/api';
import {
    SPEECH_THERAPIST_DASHBOARD_STATS,
    SPEECH_THERAPIST_MY_STUDENTS,
    SPEECH_THERAPIST_UPCOMING_SESSIONS,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getSpeechTherapistStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPEECH_THERAPIST_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSpeechTherapistUpComingSessionsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPEECH_THERAPIST_UPCOMING_SESSIONS,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};

export const getSpeechTherapistMyStudentCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPEECH_THERAPIST_MY_STUDENTS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
