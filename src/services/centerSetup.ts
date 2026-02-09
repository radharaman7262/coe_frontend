import { QueryKeys } from '@/utils/queryKeys';

export const centerListKeys = {
    all: [QueryKeys.CENTER_LIST],
    getCenterList: (params: { page: string | number; limit: number; search: string }) =>
        [...centerListKeys.all, params] as const,
};

export const centerAdminDropDownKeys = {
    all: [QueryKeys.CENTER_ADMIN_DROPDOWN_LIST],
    getCenterAdminDropDownList: () => [...centerAdminDropDownKeys.all] as const,
};
