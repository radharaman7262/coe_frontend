import callApi from '@/app/api/api';
import { GET_PSYCHOLOGIST_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getPsychologistApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_PSYCHOLOGIST_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
