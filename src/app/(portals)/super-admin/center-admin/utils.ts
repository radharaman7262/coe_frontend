import callApi from '@/app/api/api';

import {
    CENTER_ADMIN_DROPDOWN_LIST,
    CENTER_ADMIN_LIST,
    CENTER_ADMIN_SPECIALIZATION,
    CENTER_DROPDOWN_LIST_API,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getCenterAdminApiCall = async ({
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
        url: CENTER_ADMIN_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });

    return response;
};

export const addCenterAdminApiCall = async (body: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roleId: string;
    centerId: string;
    specialization: { id: string }[];
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: CENTER_ADMIN_DROPDOWN_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};

export const updateCenterAdminApiCall = async (
    centerAdminId: number,
    body: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        roleId: string;
        centerId: string;
        specialization: { id: string }[];
    },
) => {
    const authToken = await getCookie(JWT_TOKEN);
    const url = `${CENTER_ADMIN_DROPDOWN_LIST}${centerAdminId}`;

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};

// export const changeCenterSetupStatusApiCall = async (body: { id: string; status?: string }) => {
//     const { id, status } = body;

//     const authToken = await getCookie(JWT_TOKEN);

//     const response = await callApi({
//         method: HTTP_METHOD.POST,
//         url: `${CENTER_ADMIN_STATUS}/${id}/${status}`,
//         headers: { Authorization: `Bearer ${authToken}` },
//     });

//     return response;
// };

export const getCenterSpecializationDropDownListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${CENTER_ADMIN_SPECIALIZATION}${'3'}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });
    return response;
};

export const getCenterListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: CENTER_DROPDOWN_LIST_API,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
