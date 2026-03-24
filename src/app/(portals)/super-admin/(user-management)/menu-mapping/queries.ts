import { useQuery } from '@tanstack/react-query';

import { menuMappingTypeKeys } from '@/services/menuMapping';

import { getRoleMenuMapApiCall } from './utils';

export const useGetMenuMappingList = () =>
    useQuery({
        queryKey: menuMappingTypeKeys.getMenuMappingTypeList(),
        queryFn: () => getRoleMenuMapApiCall(),
    });
