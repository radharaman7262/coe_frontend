import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import { ADMIN_LANGUAGE } from '../api/apiRoutes';

import callApi from '../api/api';

export const getLangugaeApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_LANGUAGE,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};
