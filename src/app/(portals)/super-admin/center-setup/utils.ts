import callApi from '@/app/api/api';

import { CENTER_ADMIN_DROPDOWN_LIST, CENTER_STATUS, CENTER_SETUP_LIST } from '@/app/api/apiRoutes';
import { CenterSetupPayloadType } from '@/types/centerSetupType';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getCenterSetupListApiCall = async ({
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
        url: CENTER_SETUP_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });
    return response;
};

export const getCenterAdminDropDownListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: CENTER_ADMIN_DROPDOWN_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const addCenterSetupApiCall = async (body: CenterSetupPayloadType) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: CENTER_SETUP_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    return response;
};

export const updateCenterSetupApiCall = async (centerId: number, body: CenterSetupPayloadType) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);
    const url = `${CENTER_SETUP_LIST}/${centerId}`;

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    return response;
};

export const changeCenterSetupStatusApiCall = async (body: { id: string; status?: string }) => {
    const { id, status } = body;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${CENTER_STATUS}/${id}/${status}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
