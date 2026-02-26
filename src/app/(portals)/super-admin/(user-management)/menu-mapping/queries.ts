import { useQuery } from '@tanstack/react-query';

import { menuMappingTypeKeys } from '@/services/menuMapping';

import { getRoleMenuMapApiCall } from './utils';

export const useGetMenuMappingList = () => {
    console.warn('');

    return useQuery({
        queryKey: menuMappingTypeKeys.getMenuMappingTypeList(),
        queryFn: () => getRoleMenuMapApiCall(),
    });
};
