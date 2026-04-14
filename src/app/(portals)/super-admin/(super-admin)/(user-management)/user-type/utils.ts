import callApi from '@/app/api/api';
import {
    CREATE_USER_TYPE_ENDPOINT,
    UPDATE_USER_TYPE_ENDPOINT,
    USER_TYPE_ENDPOINT,
    USER_TYPE_STATUS_ENDPOINT,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';
import { UserTypePayload } from '@/types/userType';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getUserTypeApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: USER_TYPE_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const AddUserTypeApiCall = async (body: UserTypePayload) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: CREATE_USER_TYPE_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    if (!response?.status) {
        throw new Error(response?.message || 'Something went wrong');
    }

    return response;
};

export const UpdateUserTypeAPICall = async (id: string, body: UserTypePayload) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url: `${UPDATE_USER_TYPE_ENDPOINT}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    if (!response?.status) {
        throw new Error(response?.message || 'Something went wrong');
    }

    return response;
};

export const UpdateUserTypeStatusAPICall = async (body: { id: string; status?: string }) => {
    const { id, status } = body;

    const payLoadData = {
        status,
    };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: `${USER_TYPE_STATUS_ENDPOINT}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payLoadData,
    });

    if (!response?.status) {
        throw new Error(response?.message || 'Something went wrong');
    }

    return response;
};
