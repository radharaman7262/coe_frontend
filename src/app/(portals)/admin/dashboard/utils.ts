import callApi from '@/app/api/api';
import {
    ADMIN_DASHBOARD_STATS,
    ADMIN_RECENT_ACTIVITY,
    ADMIN_UPCOMNG_SESSIONS,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getAdminStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getUpComingSessionsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_UPCOMNG_SESSIONS,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};

export const getAdminRecentActivityCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_RECENT_ACTIVITY,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: '1',
            limit: '1000',
        },
    });

    return response;
};
