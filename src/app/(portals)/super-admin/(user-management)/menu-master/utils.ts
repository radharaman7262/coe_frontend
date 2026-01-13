import callApi from '@/app/api/api';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

export const getMenuMasterApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    console.warn(authToken);

    const dummyAuthToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJlbWFpbCI6InN1cGVyYWRtaW5AYXVyb3NvY2lldHkub3JnIiwicm9sZUlkIjoiMSIsInVzZXJUeXBlSWQiOiIyIiwiaWF0IjoxNzY4MjYzMTQ4LCJleHAiOjE3NjgzNDk1NDh9.0ZSg9scl3smFWGn8C73upEEEl7YDHjc4Q7qVa0Ursok';

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: '',
        headers: { Authorization: `Bearer ${dummyAuthToken}` },
    });

    return response;
};
