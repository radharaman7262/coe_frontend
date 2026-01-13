import { useQuery } from '@tanstack/react-query';

import { userTypeKeys } from '@/services/userType';

import { getUserTypeApiCall } from './utils';

export const useGetUserTypeList = () => {
    console.warn('');

    return useQuery({
        queryKey: userTypeKeys.getUserTypeList(),
        queryFn: () => getUserTypeApiCall(),
    });
};
