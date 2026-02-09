import { centerAdminKeys } from '@/services/centerAdmin';
import { useQuery } from '@tanstack/react-query';

import { getCenterAdminApiCall } from './utils';

export const useGetCenterAdminList = ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: centerAdminKeys.getCenterAdminList({ page, limit, search }),
        queryFn: () =>
            getCenterAdminApiCall({
                page,
                limit,
                search,
            }),
    });
