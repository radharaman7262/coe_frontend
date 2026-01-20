import { useQuery } from '@tanstack/react-query';

import { roleMasterTypeKeys } from '@/services/roleMaster';

import { getRoleMasterTypeApiCall } from './utils';

export const useGetRoleMasterList = () =>
    useQuery({
        queryKey: roleMasterTypeKeys.getRoleMasterTypeList(),
        queryFn: () => getRoleMasterTypeApiCall(),
    });
