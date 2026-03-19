import callApi from '@/app/api/api';
import { GET_STUDENT_ASSIGN_LIST_DETAILS } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getStudentAssignList = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_STUDENT_ASSIGN_LIST_DETAILS,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
