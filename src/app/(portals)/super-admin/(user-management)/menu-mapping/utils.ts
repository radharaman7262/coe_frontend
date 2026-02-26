import callApi from '@/app/api/api';
import { ROLE_MENU_MAPPING } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';

import { JWT_TOKEN } from '@/utils/cookieManager';

import { MapMenuStateType } from './_components/PermissionMatrix/constant';

export const getRoleMenuMapApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ROLE_MENU_MAPPING,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const MapMenuApiCall = async (mappedValue: MapMenuStateType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const body = {
        roleId: mappedValue?.roleId,
        menuId: mappedValue?.menuId,
    };

    const response = await callApi({
        url: ROLE_MENU_MAPPING,
        method: HTTP_METHOD.POST,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
