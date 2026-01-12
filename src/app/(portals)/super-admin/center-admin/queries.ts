import { centerAdminKeys } from '@/services/centerAdmin';
import { useQuery } from '@tanstack/react-query';

import { getCenterAdminApiCall } from './utils';

export const useGetCenterAdminList = () => {
    console.warn('');

    return useQuery({
        queryKey: centerAdminKeys.getCenterAdminList(),
        queryFn: () => getCenterAdminApiCall(),
    });
};
