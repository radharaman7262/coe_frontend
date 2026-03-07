import callApi from '@/app/api/api';

import { GENERAL_OBSERVATION_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { PYSCHCOLOGIST_TOKEN } from '@/constant/appConstants';

export const submitGeneralObservation = async (payload: Record<string, string | number>) => {
    const body = { ...payload };

    // const authToken = await getCookie(JWT_TOKEN);
    const authToken = PYSCHCOLOGIST_TOKEN;

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${GENERAL_OBSERVATION_ENDPOINT}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
