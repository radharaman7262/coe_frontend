import callApi from '@/app/api/api';

import { SOCIAL_ENVIRONMENTAL_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { PYSCHCOLOGIST_TOKEN } from '@/constant/appConstants';

export const submitSocialEnvironmentHistory = async (payload: Record<string, string | number>) => {
    const body = { ...payload };

    // const authToken = await getCookie(JWT_TOKEN);
    const authToken = PYSCHCOLOGIST_TOKEN;

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${SOCIAL_ENVIRONMENTAL_HISTORY_ENDPOINT}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
