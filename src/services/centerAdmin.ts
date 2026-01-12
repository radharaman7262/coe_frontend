import { QueryKeys } from '@/utils/queryKeys';

export const centerAdminKeys = {
    all: [QueryKeys.CENTER_ADMIN],
    getCenterAdminList: () => [...centerAdminKeys.all] as const,
};
