import { QueryKeys } from '@/utils/queryKeys';

export const adminStaffManagementKeys = {
    all: [QueryKeys.ADMIN_STAFF_MANAGEMENT],
    getAdminStaffList: (params: { page: string | number; limit: number }) =>
        [...adminStaffManagementKeys.all, params] as const,
};
