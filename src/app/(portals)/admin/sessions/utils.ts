import callApi from '@/app/api/api';

import { ADMIN_SESSION_LIST } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getAdminSessionListApiCall = async ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: number;
    search?: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_SESSION_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });
    return response;
};
