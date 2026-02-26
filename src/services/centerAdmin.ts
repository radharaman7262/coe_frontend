import { QueryKeys } from '@/utils/queryKeys';

export const centerAdminKeys = {
    all: [QueryKeys.CENTER_ADMIN],
    getCenterAdminList: (params: { page: string | number; limit: number; search: string }) =>
        [...centerAdminKeys.all, params] as const,
};

export const centerSpecializationKeys = {
    all: [QueryKeys.CENTER_SPECIALIZATION],
    getCenterSpecializationDropDownList: () => [...centerSpecializationKeys.all] as const,
};

export const centerDropdownListKeys = {
    all: [QueryKeys.CENTER_DROPDOWN_LIST],
    getCenterListDropDownList: () => [...centerDropdownListKeys.all] as const,
};
