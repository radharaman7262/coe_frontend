import callApi from '@/app/api/api';

import { SPECIAL_EDUCATOR_INTERVENTION } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getSpecialEducatorInterventionListApiCall = async ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: string | number;
    search?: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: SPECIAL_EDUCATOR_INTERVENTION,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });
    return response;
};
