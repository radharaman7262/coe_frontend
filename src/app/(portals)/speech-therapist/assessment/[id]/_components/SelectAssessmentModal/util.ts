import callApi from '@/app/api/api';
import { GET_SELECT_ASSESSMENT_API, POST_SELECT_ASSESSMENT_API } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';
import { SelectAssessmentPayload } from './type';

export const getSelectAssessmentListDetail = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_SELECT_ASSESSMENT_API}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const postSelectAssessment = async (body: SelectAssessmentPayload) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: POST_SELECT_ASSESSMENT_API,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        body,
    });

    return response;
};
