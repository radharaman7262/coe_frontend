import { useQueryClient } from '@tanstack/react-query';

import { StatusNumberString } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import { UserCenterAdminMutationPayload, useUserCenterAdminMutation } from './mutation';

export const useUserCenterAdminAction = ({
    setLoader,
    setShow,
}: {
    setShow: (v: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useUserCenterAdminMutation();

    const queryClient = useQueryClient();

    const execute = async (payload: UserCenterAdminMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'Center admin created successfully',
                update: 'Center admin Updated Successfully',
                status:
                    payload.type === 'status' && payload.status === StatusNumberString.ACTIVE
                        ? 'Activated Successfully'
                        : 'Deactivated Successfully',
            };

            showToast({
                type: 'success',
                message: messageMap[payload.type],
            });

            await Promise.all([
                queryClient.refetchQueries({ queryKey: [QueryKeys.CENTER_ADMIN] }),
                queryClient.refetchQueries({ queryKey: [QueryKeys.CENTER_LIST] }),
                queryClient.refetchQueries({ queryKey: [QueryKeys.CENTER_TRACK] }),
                queryClient.refetchQueries({ queryKey: [QueryKeys.CENTER_ADMIN_DROPDOWN_LIST] }),
            ]);

            if (payload.type !== 'status') {
                setShow(false);
            }
        } catch (error) {
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        } finally {
            setLoader?.(false);
            setShow(false);
        }
    };

    return { execute, isLoading: mutation.isPending };
};
