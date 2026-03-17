import callApi from '@/app/api/api';

import { SUBMIT_POST_NATAL_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { JWT_TOKEN } from '@/utils/cookieManager';
import { getCookie } from '@/utils/cookieInServer';

export const submitPostNatalHistory = async (payload: Record<string, string | number>) => {
    const body = { ...payload };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${SUBMIT_POST_NATAL_ENDPOINT}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
