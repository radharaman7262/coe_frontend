import callApi from '@/app/api/api';

import { ADD_NEW_STAFF_MEMBER, ADMIN_STAFF_MANAGEMENT_API } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

import { staffListPayloadDataType } from './type';

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

export const addStaffApiCall = async (body: staffListPayloadDataType) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: ADD_NEW_STAFF_MEMBER,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    return response;
};

export const changeStaffStatusApiCall = async (body: { id: string; status?: string }) => {
    const { id, status } = body;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${ADD_NEW_STAFF_MEMBER}/status/${id}/${status}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
