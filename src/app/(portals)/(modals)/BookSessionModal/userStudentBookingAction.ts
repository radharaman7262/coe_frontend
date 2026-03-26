'use client';

import { useRouter } from 'next/navigation';

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
    const router = useRouter();

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

            router.refresh();

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.SPECIAL_EDUCATOR_INTERVENTION],
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.SPECIAL_EDUCATOR_ASSESSMENT],
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.GET_BOOKING_SLOT],
            });

            router.refresh();
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
