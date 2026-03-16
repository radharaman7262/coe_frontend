import { QueryKeys } from '@/utils/queryKeys';

export const psychologistDateListKeys = {
    all: [QueryKeys.GET_PSYCHOLOGIST_DATES],
    getpsycoholgistDateList: (params: { userId: string; startDate: string; endDate: string }) =>
        [...psychologistDateListKeys.all, params] as const,
};
