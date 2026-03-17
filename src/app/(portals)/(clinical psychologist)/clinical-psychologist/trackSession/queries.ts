import { useQuery } from '@tanstack/react-query';

import { trackSessionListKeys } from '@/services/trackSession';

import { getTrackSessionListApiCall } from './utils';

export const useGetTrackSessionList = ({
    page,
    limit,
    search,
    status,
}: {
    page: string | number;
    limit: string | number;
    search: string;
    status: string;
}) =>
    useQuery({
        queryKey: trackSessionListKeys.getTrackSessionList({
            page,
            limit,
            search,
            status,
        }),
        queryFn: () =>
            getTrackSessionListApiCall({
                page,
                limit,
                search,
                status,
            }),
    });
