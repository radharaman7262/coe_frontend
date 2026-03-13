import callApi from '@/app/api/api';
import { GET_GRADE_ENDPOINT, GET_SCHOOL_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';
import { SchoolPayloadType } from './type';

export const getGradeListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_GRADE_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSchoolListApiCall = async (payload: SchoolPayloadType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_SCHOOL_ENDPOINT}?udiseCode=${payload.udiseCode}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
