import { useQuery } from '@tanstack/react-query';

import { adminSessionListKeys } from '@/services/sessionSetup';

import { getAdminSessionListApiCall } from './utils';

export const useGetAdminSessionList = ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: adminSessionListKeys.getAdminSessionList({ page, limit, search }),
        queryFn: () =>
            getAdminSessionListApiCall({
                page,
                limit,
                search,
            }),
    });
