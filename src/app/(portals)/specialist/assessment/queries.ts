import { useQuery } from '@tanstack/react-query';

import { specialEducatorAssessmentListKeys } from '@/services/assessment';
import { getSpecialEducatorAssessmentListApiCall } from './utils';

export const useGetSpecialEducatorAssessmentList = ({
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
        queryKey: specialEducatorAssessmentListKeys.getSpecialEducatorAssessmentList({
            page,
            limit,
            search,
            status,
        }),
        queryFn: () =>
            getSpecialEducatorAssessmentListApiCall({
                page,
                limit,
                search,
                status,
            }),
    });
