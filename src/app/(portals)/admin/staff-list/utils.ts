import callApi from '@/app/api/api';

import { ADMIN_STAFF_MANAGEMENT_API } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getAdminStaffListApiCall = async ({
    page,
    limit,
}: {
    page: string | number;
    limit: number;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_STAFF_MANAGEMENT_API,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
        },
    });
    return response;
};
