import { StatusNumberString } from '@/constant/appConstants';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { showToast } from '@/components/ui/Toaster/constant';
import { UserRoleMutationPayload, useUserRoleMutation } from './mutation';

export const useUserRoleActions = ({
    router,
    setLoader,
    setShow,
}: {
    router: AppRouterInstance;
    setLoader: (v: boolean) => void;
    setShow: (v: boolean) => void;
}) => {
    const mutation = useUserRoleMutation();

    const execute = async (payload: UserRoleMutationPayload) => {
        try {
            setLoader(true);

            await mutation.mutateAsync(payload);

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
            setLoader(false);
        }
    };

    return { execute, isLoading: mutation.isPending };
};
