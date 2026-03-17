import callApi from '@/app/api/api';

import { GET_CLINICAL_PSYCHOLOGIST_FORM_DETAILS } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getStudentFormDetails = async (args: { studentId: string; formId: string }) => {
    const { studentId, formId } = args;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_CLINICAL_PSYCHOLOGIST_FORM_DETAILS}/${studentId}/${formId}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
