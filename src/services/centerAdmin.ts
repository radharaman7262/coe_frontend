import { QueryKeys } from '@/utils/queryKeys';

export const centerAdminKeys = {
    all: [QueryKeys.CENTER_ADMIN],
    getCenterAdminList: (params: { page: string | number; limit: number; search: string }) =>
        [...centerAdminKeys.all, params] as const,
};
