import { useQuery } from '@tanstack/react-query';

import { specialEducatorInterventionListKeys } from '@/services/intervention';
import { getSpecialEducatorInterventionListApiCall } from './utils';

export const useGetSpecialEducatorInterventionList = ({
    page,
    limit,
    search,
    // status,
}: {
    page: string | number;
    limit: string | number;
    search: string;
    // status: string;
}) =>
    useQuery({
        queryKey: specialEducatorInterventionListKeys.getSpecialEducatorInterventionList({
            page,
            limit,
            search,
            // status,
        }),
        queryFn: () =>
            getSpecialEducatorInterventionListApiCall({
                page,
                limit,
                search,
                // status,
            }),
    });
