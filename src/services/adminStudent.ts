import { QueryKeys } from '@/utils/queryKeys';

export const adminStudentListKeys = {
    all: [QueryKeys.GET_STUDENT_LIST],
    getAdminStudentList: (params: {
        page: string | number;
        limit: number;
        search: string;
        status: string;
    }) => [...adminStudentListKeys.all, params] as const,
};
