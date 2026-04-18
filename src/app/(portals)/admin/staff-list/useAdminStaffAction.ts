import { useQueryClient } from '@tanstack/react-query';

import { StatusNumberString } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

import { QueryKeys } from '@/utils/queryKeys';

import { UserStaffManagementMutationPayload, useUserAdminStaffMutation } from './mutation';

export const useUserAdminStaffAction = ({
    setLoader,
    setShow,
}: {
    setShow: (v: boolean) => void;
    setLoader?: (v: boolean) => void;
}) => {
    const mutation = useUserAdminStaffMutation();

    const queryClient = useQueryClient();

    const execute = async (payload: UserStaffManagementMutationPayload) => {
        try {
            setLoader?.(true);

            const response = await mutation.mutateAsync(payload);

            const { status, message } = response || {};

            if (!status) {
                throw new Error(message);
            }

            const messageMap = {
                create: 'Staff created successfully',
                update: 'Staff Updated Successfully',
                status:
                    payload.type === 'status' && payload.status === StatusNumberString.ACTIVE
                        ? 'Activated Successfully'
                        : 'Deactivated Successfully',
            };

            showToast({
                type: 'success',
                message: messageMap[payload.type],
            });

            setShow(false);

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.ADMIN_STAFF_MANAGEMENT],
            });

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.PSYCHOLOGIST],
            });

            if (payload.type !== 'status') {
                setShow(false);
            }
        } catch (error) {
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
