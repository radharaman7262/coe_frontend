import callApi from '@/app/api/api';

import { SUBMIT_SOCIAL_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const submitSocialDevelopment = async (payload: Record<string, string | number>) => {
    const body = { ...payload };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${SUBMIT_SOCIAL_DEVELOPMENT_ENDPOINT}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
