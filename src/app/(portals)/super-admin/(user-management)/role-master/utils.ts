import callApi from '@/app/api/api';

import { ROLE_MASTER_ENDPOINT, ROLE_MASTER_STATUS_ENDPOINT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

import { StatusNumber } from '@/constant/appConstants';

import { userDataType } from '../user-type/_components/type';

export const getRoleMasterTypeApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ROLE_MASTER_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const addRoleMasterApiCall = async (body: { name: string; userTypeId: string }) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: ROLE_MASTER_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};

export const updaterRoleMasterApiCall = async (body: {
    id?: string;
    name: string;
    userTypeId: string;
}) => {
    const { id, name, userTypeId } = body;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url: `${ROLE_MASTER_ENDPOINT}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body: {
            name,
            userTypeId,
        },
    });

    return response;
};

export const changeRoleMasterStatusApiCall = async (body: { id: string; status?: string }) => {
    const { id, status } = body;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${ROLE_MASTER_STATUS_ENDPOINT}/${id}/${status}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getUserType = (results: userDataType[]) => {
    if (results) {
        const activeUserTypeList = results?.filter((item) => item?.status === StatusNumber.ACTIVE);

        const data = activeUserTypeList?.map((item) => ({
            name: item?.name,
            id: item?.id,
            status: item?.status,
        }));

        return data;
    }

    return [];
};
