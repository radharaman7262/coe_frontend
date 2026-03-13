import callApi from '@/app/api/api';
import { ADMIN_LANGUAGE } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getLanguageListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_LANGUAGE,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
