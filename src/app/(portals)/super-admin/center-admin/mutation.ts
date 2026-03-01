import { showToast } from '@/components/ui/Toaster/constant';
import { LOADING_TIME_DURATION } from '@/constant/appConstants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/utils/queryKeys';
import { addCenterAdminApiCall, updateCenterAdminApiCall } from './utils';

// export const useChangeCenterStatusMutation = ({ router }: { router: AppRouterInstance }) =>
//     useMutation({
//         mutationFn: (body: { id: string; status?: string }) => changeCenterSetupStatusApiCall(body),

//         onSuccess(data) {
//             const { status, error, response } = data || {};

//             if (!status) {
//                 throw new Error(error);
//             }

//             router.refresh();

//             showToast({ type: 'success', message: response });
//         },
//         onError(error) {
//             const errorMessage = error instanceof Error ? error.message : String(error);

//             showToast({ type: 'success', message: errorMessage });
//         },
//     });

export const useAddCenterAdminMutation = ({
    setLoader,
    setShow,
    centerAdminId,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    centerAdminId: number | null;
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body: {
            firstName: string;
            lastName: string;
            phone: string;
            email: string;
            roleId: string;
            centerId: string;
            specialization: { id: string }[];
        }) => {
            if (centerAdminId === null) {
                return addCenterAdminApiCall(body);
            }

            return updateCenterAdminApiCall(centerAdminId, body);
        },

        onMutate() {
            setLoader(true);
        },

        onSuccess(data) {
            const { status, response, message } = data || {};

            if (!status) {
                throw new Error(message);
            }

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.CENTER_ADMIN],
            });

            setShow(false);

            showToast({
                type: 'success',
                message: centerAdminId ? 'Center updated successfully' : response,
            });
        },

        onError(error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            showToast({ type: 'error', message: errorMessage });
        },

        onSettled() {
            setTimeout(() => {
                setLoader(false);
            }, LOADING_TIME_DURATION);
        },
    });
};
