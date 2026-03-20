import callApi from '@/app/api/api';

import {
    GET_SPECIAL_EDUCATOR_STUDENTS_DETAIL,
    SUBMIT_SPECIAL_EDUCATOR_STUDENTS_DETAIL,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';
import { SpecialEducatorStudentFormType } from '@/types/specialEducatorChildInformationType';

export const getSpecialEducatorStudentDetail = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_SPECIAL_EDUCATOR_STUDENTS_DETAIL}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const submitSpecialEducatorChildInformation = async (
    body: SpecialEducatorStudentFormType,
) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: SUBMIT_SPECIAL_EDUCATOR_STUDENTS_DETAIL,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
