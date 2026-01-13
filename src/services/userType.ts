import { QueryKeys } from '@/utils/queryKeys';

export const userTypeKeys = {
    all: [QueryKeys.USER_TYPE],
    getUserTypeList: () => [...userTypeKeys.all] as const,
};
