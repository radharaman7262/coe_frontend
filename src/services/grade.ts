import { QueryKeys } from '@/utils/queryKeys';

export const gradeKeys = {
    all: [QueryKeys.GRADE] as const,

    getGradeTypeList: () => [...gradeKeys.all] as const,
};
