import { useQuery } from '@tanstack/react-query';

import { menuMasterTypeKeys } from '@/services/menuMaster';

import { getMenuMasterApiCall } from './utils';

export const useGetMenuMasterList = () => {
    console.warn('');

    return useQuery({
        queryKey: menuMasterTypeKeys.getMenuMasterTypeList(),
        queryFn: () => getMenuMasterApiCall(),
    });
};
