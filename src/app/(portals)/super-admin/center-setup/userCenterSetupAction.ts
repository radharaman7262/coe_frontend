import { useQueryClient } from '@tanstack/react-query';

import { StatusNumberString } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import { UserCenterSetupMutationPayload, useUserCenterSetupMutation } from './mutation';

export const useUserCenterSetupActions = ({
    setLoader,
    setShow,
}: {
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
                create: 'Center created successfully',
                update: 'Center Updated Successfully',
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
                queryKey: [QueryKeys.CENTER_LIST, QueryKeys.CENTER_ADMIN],
            });

            if (payload.type !== 'status') {
                setShow(false);
            }
        } catch (error) {
            setShow(false);
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        } finally {
            setShow(false);
            setLoader?.(false);
        }
    };

    return { execute, isLoading: mutation.isPending };
};
