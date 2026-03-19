import { QueryKeys } from '@/utils/queryKeys';

export const assignSpecialistKeys = {
    all: [QueryKeys.ASSIGN_SPECIALIST],
    getAssignSpecialistKeys: (params: { search?: string; role?: string }) => {
        const { search, role } = params;

        return [...assignSpecialistKeys.all, search, role] as const;
    },
};
