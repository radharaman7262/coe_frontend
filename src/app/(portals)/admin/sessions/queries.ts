import { useQuery } from '@tanstack/react-query';

import { adminSessionListKeys } from '@/services/sessionSetup';

import { getAdminSessionListApiCall } from './utils';

export const useGetAdminSessionList = ({
    page,
    limit,
    search,
    status,
}: {
    page: string | number;
    limit: number;
    search: string;
    status: string;
}) =>
    useQuery({
        queryKey: adminSessionListKeys.getAdminSessionList({
            page,
            limit,
            search,
            status,
        }),
        queryFn: () =>
            getAdminSessionListApiCall({
                page,
                limit,
                search,
                status,
            }),
    });
