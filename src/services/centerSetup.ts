import { QueryKeys } from '@/utils/queryKeys';

export const centerListKeys = {
    all: [QueryKeys.CENTER_LIST],
    getCenterList: () => [...centerListKeys.all] as const,
};
