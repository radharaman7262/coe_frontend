import callApi from '@/app/api/api';

import { SPECIAL_EDUCATOR_ASSESSMENT_STUDENT_LIST } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getSpecialEducatorAssessmentListApiCall = async ({
    page,
    limit,
    search,
    status,
}: {
    page: string | number;
    limit: string | number;
    search?: string;
    status: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPECIAL_EDUCATOR_ASSESSMENT_STUDENT_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(status && { status }),
            ...(search && { search }),
        },
    });
    return response;
};
