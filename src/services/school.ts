import { QueryKeys } from '@/utils/queryKeys';

export const schoolTypeKeys = {
    all: [QueryKeys.SCHOOL] as const,

    list: () => [...schoolTypeKeys.all, 'list'] as const,

    getSchoolByUdise: (udiseCode: string) => [...schoolTypeKeys.all, 'udise', udiseCode] as const,
};
