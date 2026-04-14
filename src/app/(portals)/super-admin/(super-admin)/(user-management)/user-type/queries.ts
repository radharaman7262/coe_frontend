import { useQuery } from '@tanstack/react-query';

import { userTypeKeys } from '@/services/userType';

import { getUserTypeApiCall } from './utils';

export const useGetUserTypeList = () =>
    useQuery({
        queryKey: userTypeKeys.getUserTypeList(),
        queryFn: () => getUserTypeApiCall(),
    });
