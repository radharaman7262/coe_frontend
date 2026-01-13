import { QueryKeys } from '@/utils/queryKeys';

export const menuMappingTypeKeys = {
    all: [QueryKeys.MENU_MAPPING],
    getMenuMappingTypeList: () => [...menuMappingTypeKeys.all] as const,
};
