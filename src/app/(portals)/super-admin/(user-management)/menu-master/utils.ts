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

import { updateMenuMasterBody, userAddMutationBody } from './types';

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

export const AddMenuMastereApiCall = async (body: userAddMutationBody) => {
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

export const UpdateMenuMasterApiCall = async (id: string, body: updateMenuMasterBody) => {
    const authToken = await getCookie(JWT_TOKEN);

    const payLoadBody = {
        name: body?.name,
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

export const UpdateMenuMasterTypeStatusAPICall = async ({
    id,
    status,
}: {
    id: string;
    status: StatusNumberString.INACTIVE | StatusNumberString.ACTIVE;
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
