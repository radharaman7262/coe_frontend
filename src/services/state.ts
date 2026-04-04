import { QueryKeys } from '@/utils/queryKeys';

export const stateTypeKeys = {
    all: [QueryKeys.STATE],
    getStateTypeList: () => [...stateTypeKeys.all] as const,
};

export const districtTypeKeys = {
    all: [QueryKeys.DISTRICT],
    getDistrictTypeList: () => [...districtTypeKeys.all] as const,
};

export const blockTypeKeys = {
    all: [QueryKeys.BLOCK],
    getBlockTypeList: () => [...blockTypeKeys.all] as const,
};
