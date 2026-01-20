import { QueryKeys } from '@/utils/queryKeys';

export const menuMasterTypeKeys = {
    all: [QueryKeys.MENU_MASTER_TYPE] as const,

    getMenuMasterTypeList: (params: {
        page: number | string;
        limit: number | string;
        search?: string;
    }) => [...menuMasterTypeKeys.all, params.page, params.limit, params.search ?? ''] as const,
};
