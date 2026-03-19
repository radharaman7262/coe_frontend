import { useQuery } from '@tanstack/react-query';

import { assignSpecialistKeys } from '@/services/assignSpecialistKeys';

import { getStudentAssignList } from './utils.api';

export const useGetAssignSpecialist = (params: { search?: string; role?: string }) => {
    const { search, role } = params;

    return useQuery({
        queryKey: assignSpecialistKeys.getAssignSpecialistKeys({
            search,
            role,
        }),
        queryFn: () => getStudentAssignList(),
    });
};
