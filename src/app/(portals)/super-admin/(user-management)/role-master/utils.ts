import callApi from '@/app/api/api';

import { ROLE_MASTER_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getRoleMasterTypeApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ROLE_MASTER_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
