import callApi from '@/app/api/api';
import {
    OCCUPATIONAL_THERAPIST_GET_DURATION,
    OCCUPATIONAL_THERAPIST_LEVEL_OF_SUPPORT,
} from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getTherpistDurationApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: OCCUPATIONAL_THERAPIST_GET_DURATION,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getLevelOfSupportApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: OCCUPATIONAL_THERAPIST_LEVEL_OF_SUPPORT,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};
