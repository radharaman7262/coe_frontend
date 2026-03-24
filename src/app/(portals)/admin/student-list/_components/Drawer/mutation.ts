import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QueryKeys } from '@/utils/queryKeys';

import { addStudentApiCall } from './utils.api';

export const useAddStudentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addStudentApiCall,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_STUDENT_LIST] });
            queryClient.invalidateQueries({ queryKey: [QueryKeys.PSYCHOLOGIST] });
            queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_BOOKING_SLOT] });
            queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_PSYCHOLOGIST_DATES] });
        },
    });
};
