import { useQuery } from '@tanstack/react-query';

import { menuMasterTypeKeys } from '@/services/menuMaster';

import { getMenuMasterApiCall } from './utils';

export const useGetMenuMasterList = ({
    page,
    limit,
    search,
}: {
    page: number | string;
    limit: number | string;
    search?: string;
}) =>
    useQuery({
        queryKey: menuMasterTypeKeys.getMenuMasterTypeList({
            page,
            limit,
            search,
        }),
        queryFn: () =>
            getMenuMasterApiCall({
                page,
                limit,
                search,
            }),
    });
