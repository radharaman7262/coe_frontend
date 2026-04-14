import callApi from '@/app/api/api';

import {
    CREATE_MENU_MASTER_ENDPOINT,
    MENU_MASTER_ENDPOINT,
    MENU_MASTER_STATUS_ENDPOINT,
    UPDATE_MENU_MASTER_ENDPOINT,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';
import { StatusNumberString } from '@/constant/appConstants';

import { MenuMasterPayloadType } from './types';

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

export const addMenuMasterApiCall = async (body: MenuMasterPayloadType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const payLoadBody = {
        name: body?.menuName,
        menuLink: body?.menuLink,
        remarks: body?.remarks,
        priority: body?.priority,
        parentId: body?.parentId,
        isParent: body?.isParent,
    };

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: CREATE_MENU_MASTER_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payLoadBody,
    });

    return response;
};

export const updateMenuMasterApiCall = async (id: string, body: MenuMasterPayloadType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const payLoadBody = {
        name: body?.menuName,
        menuLink: body?.menuLink,
        remarks: body?.remarks,
        priority: body?.priority,
        parentId: body?.parentId,
        isParent: body?.isParent,
    };

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url: `${UPDATE_MENU_MASTER_ENDPOINT}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payLoadBody,
    });

    return response;
};

export const updateMenuMasterTypeStatusAPICall = async ({
    id,
    status,
}: {
    id: string;
    status: StatusNumberString;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${MENU_MASTER_STATUS_ENDPOINT}/${id}/${status}`,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });

    return response;
};
