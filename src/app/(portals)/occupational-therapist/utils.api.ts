import callApi from '@/app/api/api';

import {
    GET_OCCUPATIONAL_THERAPIST_STUDENT_DETAILS_API_URL,
    SUBMIT_OT_STUDENT_INFORMATION,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';
import { OTFormType } from '@/types/OTchildInformationType';

export const getOTStudentDetail = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_OCCUPATIONAL_THERAPIST_STUDENT_DETAILS_API_URL}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const submitOTChildInformation = async (body: OTFormType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: SUBMIT_OT_STUDENT_INFORMATION,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
