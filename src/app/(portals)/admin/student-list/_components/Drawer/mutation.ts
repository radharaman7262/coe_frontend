import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addStudentApiCall } from './utils.api';

export const useAddStudentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addStudentApiCall,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['student-list'] });
        },
    });
};
