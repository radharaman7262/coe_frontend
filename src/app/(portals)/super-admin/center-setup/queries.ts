import { centerListKeys } from '@/services/centerSetup';

import { useQuery } from '@tanstack/react-query';

import { getCenterSetupListApiCall } from './utils';

export const useGetCenterList = () => {
    console.warn('');

    return useQuery({
        queryKey: centerListKeys.getCenterList(),
        queryFn: () => getCenterSetupListApiCall(),
    });
};
