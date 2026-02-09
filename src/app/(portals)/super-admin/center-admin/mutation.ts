import { showToast } from '@/components/ui/Toaster/constant';
import { LOADING_TIME_DURATION } from '@/constant/appConstants';
import { useMutation } from '@tanstack/react-query';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
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
    router,
    centerAdminId,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
    centerAdminId: number | null;
}) =>
    useMutation({
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
            const { status, error, response } = data || {};

            if (!status) {
                throw new Error(error);
            }

            router.refresh();
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
