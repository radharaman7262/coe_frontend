import { QueryKeys } from '@/utils/queryKeys';

export const centerStaffKeys = {
    all: [QueryKeys.CENTER_STAFF],
    getCenterStaffList: (params: {
        centerAdminId: string | number;
        page: string | number;
        limit: number;
        search: string;
    }) => [...centerStaffKeys.all, params] as const,
};
