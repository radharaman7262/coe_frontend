import callApi from '@/app/api/api';
import { UPDATE_PASSWORD_ENDPOINT } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';

interface BodyPayload {
    password: string;
    paramToken: string;
}

export const updatePasswordApiCall = async (data: BodyPayload) => {
    const body = {
        password: data?.password,
    };

    const response = await callApi({
        method: HTTP_METHOD.PUT,
        url: UPDATE_PASSWORD_ENDPOINT,
        headers: { Authorization: `Bearer ${data?.paramToken}` },
        body,
    });

    return response;
};
