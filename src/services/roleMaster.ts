import { QueryKeys } from '@/utils/queryKeys';

export const roleMasterTypeKeys = {
    all: [QueryKeys.ROLE_MASTER_TYPE],
    getRoleMasterTypeList: () => [...roleMasterTypeKeys.all] as const,
};
