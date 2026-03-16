import { useQuery } from '@tanstack/react-query';

import { adminStudentListKeys } from '@/services/adminStudent';

import { getAdminStudentListApiCall } from './utils.api';

export const useGetStudentList = ({
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
        queryKey: adminStudentListKeys.getAdminStudentList({
            page,
            limit,
            search,
            status,
        }),
        queryFn: () =>
            getAdminStudentListApiCall({
                page,
                limit,
                search,
                status,
            }),
    });
