import { QueryKeys } from '@/utils/queryKeys';

export const languageTypeKeys = {
    all: [QueryKeys.LANGUAGE],
    getLanguageTypeList: () => [...languageTypeKeys.all] as const,
};
