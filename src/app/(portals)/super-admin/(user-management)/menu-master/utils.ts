import callApi from '@/app/api/api';

import { MENU_MASTER_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getMenuMasterApiCall = async ({
    page,
    limit,
    search,
}: {
    page: number | string;
    limit: number | string;
    search?: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: MENU_MASTER_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });

    return response;
};
