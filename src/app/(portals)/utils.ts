import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import { PYSCHCOLOGIST_TOKEN } from '@/constant/appConstants';

import { ADMIN_LANGUAGE, FORM_LIST_API_URL } from '../api/apiRoutes';

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

export const getCaseHistorySidebarApiCall = async (id: string) => {
    // const authToken = await getCookie(JWT_TOKEN);

    const authToken = PYSCHCOLOGIST_TOKEN;

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${FORM_LIST_API_URL}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};
