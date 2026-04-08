import { QueryKeys } from '@/utils/queryKeys';

export const centerStudentKeys = {
    all: [QueryKeys.CENTER_STUDENT],
    getCenterStudentList: (params: { page: string | number; limit: number; search: string }) =>
        [...centerStudentKeys.all, params] as const,
};
