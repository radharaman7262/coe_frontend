import { useMutation, useQueryClient } from '@tanstack/react-query';

import { mapStudentToSpecialist } from '@/app/(portals)/(clinical psychologist)/assessment/case-history/utils.api';

import { SelectedAssignment } from './type';

export const useMapStudentToSpecialist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body: { studentId: number; assignments: SelectedAssignment[] }) =>
            mapStudentToSpecialist(body),
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['student-list'] });
        },
    });
};
