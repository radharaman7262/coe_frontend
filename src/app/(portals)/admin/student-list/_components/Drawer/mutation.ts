import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QueryKeys } from '@/utils/queryKeys';

import { addStudentApiCall } from './utils.api';

export const useAddStudentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addStudentApiCall,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_STUDENT_LIST] });
        },
    });
};
