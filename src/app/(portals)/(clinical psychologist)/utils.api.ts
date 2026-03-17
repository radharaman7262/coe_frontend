import callApi from '@/app/api/api';

import {
    GET_STUDENT_DETAIL_API_URL,
    SUBMIT_STUDENT_INFORMATION_API_URL,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getStudentDetail = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_STUDENT_DETAIL_API_URL}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const submitChildInformation = async (body: Record<string, string>) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: SUBMIT_STUDENT_INFORMATION_API_URL,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
