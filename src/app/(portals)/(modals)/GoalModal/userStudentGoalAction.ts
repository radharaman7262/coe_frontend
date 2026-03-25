'use client';

import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import { UserGoalMutationPayload, useStudentGoalMutation } from './mutation';

export const useUserGoalAction = ({
    setShow,
    setLoader,
}: {
    setShow?: (val: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useStudentGoalMutation();

    const router = useRouter();

    const queryClient = useQueryClient();

    const execute = async (payload: UserGoalMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'Student Goal created successfully',
            };

            showToast({
                type: 'success',
                message: messageMap?.create,
            });

            router.refresh();

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.SPECIAL_EDUCATOR_INTERVENTION],
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
