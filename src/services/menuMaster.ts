import { QueryKeys } from '@/utils/queryKeys';

export const menuMasterTypeKeys = {
    all: [QueryKeys.MENU_MASTER_TYPE],
    getMenuMasterTypeList: () => [...menuMasterTypeKeys.all] as const,
};
