import callApi from '@/app/api/api';
import {
    CLINICAL_PSYCHOLOGIST_DASHBOARD_STATS,
    CLINICAL_PSYCHOLOGIST_RECENT_ACTIVITY,
    CLINICAL_PSYCHOLOGIST_UPCOMNG_SESSIONS,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getClinicalPsychologistStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: CLINICAL_PSYCHOLOGIST_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getPsychologistUpComingSessionsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: CLINICAL_PSYCHOLOGIST_UPCOMNG_SESSIONS,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};

export const getPsychologistRecentActivityCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: CLINICAL_PSYCHOLOGIST_RECENT_ACTIVITY,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};
