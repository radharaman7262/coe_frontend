import { useQuery } from '@tanstack/react-query';

import { adminStaffManagementKeys } from '@/services/staffManagement';

import { getAdminStaffListApiCall } from './utils';

export const useGetAdminStaffManagementList = ({
    page,
    limit,
}: {
    page: string | number;
    limit: number;
}) =>
    useQuery({
        queryKey: adminStaffManagementKeys.getAdminStaffList({ page, limit }),
        queryFn: () =>
            getAdminStaffListApiCall({
                page,
                limit,
            }),
    });
