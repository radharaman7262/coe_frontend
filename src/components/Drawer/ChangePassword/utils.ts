import callApi from '@/app/api/api';
import { CHANGE_PASSWORD_ENDPOINT } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const changePasswordApiCall = async (body: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.PATCH,
        url: CHANGE_PASSWORD_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
