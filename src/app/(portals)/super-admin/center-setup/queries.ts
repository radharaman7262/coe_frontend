import { centerAdminDropDownKeys, centerListKeys } from '@/services/centerSetup';

import { useQuery } from '@tanstack/react-query';

import { getCenterAdminDropDownListApiCall, getCenterSetupListApiCall } from './utils';

export const useGetCenterList = ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: centerListKeys.getCenterList({ page, limit, search }),
        queryFn: () =>
            getCenterSetupListApiCall({
                page,
                limit,
                search,
            }),
    });

export const useGetCenterAdminDropDownList = () =>
    useQuery({
        queryKey: centerAdminDropDownKeys.getCenterAdminDropDownList(),
        queryFn: () => getCenterAdminDropDownListApiCall(),
    });
