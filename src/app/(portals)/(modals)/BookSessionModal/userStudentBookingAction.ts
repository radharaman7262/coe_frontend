import { useQueryClient } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import {
    UserTherpistScheduleMutationPayload,
    useStudentTherpistScheduleMutation,
} from './mutation';

export const useUserTherpistScheduleAction = ({
    setShow,
    setLoader,
}: {
    setShow?: (val: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useStudentTherpistScheduleMutation();

    const queryClient = useQueryClient();

    const execute = async (payload: UserTherpistScheduleMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'Student Session booked successfully',
            };

            showToast({
                type: 'success',
                message: messageMap?.create,
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.SPECIAL_EDUCATOR_INTERVENTION],
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
