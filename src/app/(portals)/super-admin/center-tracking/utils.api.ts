import callApi from '@/app/api/api';
import { CENTER_STAFF_LIST, CENTER_STUDENT_LIST, CENTER_TRACK_LIST } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getCenterTrackListApiCall = async ({
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
        url: CENTER_TRACK_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });

    return response;
};

export const getCenterStaffListApiCall = async ({
    centerAdminId,
    page,
    limit,
    search,
}: {
    centerAdminId: string | number;
    page: string | number;
    limit: number;
    search?: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${CENTER_STAFF_LIST}/${centerAdminId}`,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });

    return response;
};

export const getCenterStudentListApiCall = async ({
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
        url: CENTER_STUDENT_LIST,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            page: page.toString(),
            limit: limit.toString(),
            ...(search && { search }),
        },
    });

    return response;
};
