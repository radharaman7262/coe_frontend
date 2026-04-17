import { useQueryClient } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import { UserScheduleSessionMutationPayload, useStudentScheduleSessionMutation } from './mutation';

export const useUserStudentScheduleAction = ({
    setShow,
    setLoader,
}: {
    setShow?: (val: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useStudentScheduleSessionMutation();

    const queryClient = useQueryClient();

    const execute = async (payload: UserScheduleSessionMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'Student Schedule created successfully',
            };

            showToast({
                type: 'success',
                message: messageMap?.create,
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.GET_STUDENT_LIST],
            });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.ADMIN_STAFF_MANAGEMENT],
            });
            queryClient.invalidateQueries({
                queryKey: [QueryKeys.PSYCHOLOGIST],
            });
        } catch (error) {
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        } finally {
            setShow?.(false);
            setLoader?.(false);
        }
    };

    return { execute, isLoading: mutation.isPending };
};
