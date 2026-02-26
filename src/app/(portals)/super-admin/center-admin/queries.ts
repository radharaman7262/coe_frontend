import {
    centerAdminKeys,
    centerDropdownListKeys,
    centerSpecializationKeys,
} from '@/services/centerAdmin';
import { useQuery } from '@tanstack/react-query';

import {
    getCenterAdminApiCall,
    getCenterListApiCall,
    getCenterSpecializationDropDownListApiCall,
} from './utils';

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

export const useGetSpecializationDropDownList = () =>
    useQuery({
        queryKey: centerSpecializationKeys.getCenterSpecializationDropDownList(),
        queryFn: () => getCenterSpecializationDropDownListApiCall(),
    });

export const useGetCenterDropDownList = () =>
    useQuery({
        queryKey: centerDropdownListKeys.getCenterListDropDownList(),
        queryFn: () => getCenterListApiCall(),
    });
