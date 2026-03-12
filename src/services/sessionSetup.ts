import { QueryKeys } from '@/utils/queryKeys';

export const adminSessionListKeys = {
    all: [QueryKeys.ADMIN_SESSION],
    getAdminSessionList: (params: {
        page: string | number;
        limit: number;
        search: string;
        status: string;
        assignedTo: string;
    }) => [...adminSessionListKeys.all, params] as const,
};
