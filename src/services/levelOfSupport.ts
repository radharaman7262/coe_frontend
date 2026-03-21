import { QueryKeys } from '@/utils/queryKeys';

export const levelOfSupportTypeKeys = {
    all: [QueryKeys.LEVEL_OF_SUPPORT],
    getLevelOfSupportList: () => [...levelOfSupportTypeKeys.all] as const,
};
