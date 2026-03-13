import callApi from '@/app/api/api';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import { ADD_STUDENT_ENDPOINT } from '@/app/api/apiRoutes';

export const addStudentApiCall = async (body: FormData) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: ADD_STUDENT_ENDPOINT,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        body,
    });

    return response;
};
