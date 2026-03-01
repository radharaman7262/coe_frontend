import { StatusNumberString } from '@/constant/appConstants';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { showToast } from '@/components/ui/Toaster/constant';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/utils/queryKeys';

import { UserCenterSetupMutationPayload, useUserCenterSetupMutation } from './mutation';

export const useUserCenterSetupActions = ({
    router,
    setLoader,
    setShow,
}: {
    router: AppRouterInstance;
    setShow: (v: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useUserCenterSetupMutation();

    const queryClient = useQueryClient();

    const execute = async (payload: UserCenterSetupMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'User Type Added Successfully',
                update: 'User Type Updated Successfully',
                status:
                    payload.type === 'status' && payload.status === StatusNumberString.ACTIVE
                        ? 'Activated Successfully'
                        : 'Deactivated Successfully',
            };

            showToast({
                type: 'success',
                message: messageMap[payload.type],
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.CENTER_LIST],
            });

            if (payload.type !== 'status') {
                setShow(false);
            }

            router.refresh();
        } catch (error) {
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        } finally {
            setLoader?.(false);
        }
    };

    return { execute, isLoading: mutation.isPending };
};
