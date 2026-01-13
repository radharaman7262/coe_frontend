import { useQuery } from '@tanstack/react-query';

import { menuMappingTypeKeys } from '@/services/menuMapping';

import { getMenuMappingTypeApiCall } from './utils';

export const useGetMenuMappingList = () => {
    console.warn('');

    return useQuery({
        queryKey: menuMappingTypeKeys.getMenuMappingTypeList(),
        queryFn: () => getMenuMappingTypeApiCall(),
    });
};
