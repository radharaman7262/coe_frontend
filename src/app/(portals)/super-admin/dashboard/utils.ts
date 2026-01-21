import callApi from '@/app/api/api';

import {
    SUPER_ADMIN_CENTER_OVERVIEW,
    SUPER_ADMIN_COMPILENCE_TRACKER,
    SUPER_ADMIN_DASHBOARD_STATS,
    SUPER_ADMIN_RECENT_ACTIVITY,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getSupAdminCompilApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SUPER_ADMIN_COMPILENCE_TRACKER,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSupAdminStatsApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SUPER_ADMIN_DASHBOARD_STATS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSupAdminCenterOverViewCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SUPER_ADMIN_CENTER_OVERVIEW,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSupAdminRecentActivityCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SUPER_ADMIN_RECENT_ACTIVITY,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
