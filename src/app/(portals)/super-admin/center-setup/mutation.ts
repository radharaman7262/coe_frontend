import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { useMutation } from '@tanstack/react-query';

import {
    addCenterSetupApiCall,
    changeCenterSetupStatusApiCall,
    updateCenterSetupApiCall,
} from './utils';

export const useAddCenterSetupMutation = ({
    setLoader,
    setShow,
    router,
    centerId,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
    centerId: number | null;
}) =>
    useMutation({
        mutationFn: (body: { name?: string; address: string; phone: string; adminId: string }) => {
            if (centerId === null) {
                return addCenterSetupApiCall(body);
            }

            return updateCenterSetupApiCall(centerId, body);
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
                message: centerId ? 'Center updated successfully' : response,
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

export const useChangeCenterStatusMutation = ({ router }: { router: AppRouterInstance }) =>
    useMutation({
        mutationFn: (body: { id: string; status?: string }) => changeCenterSetupStatusApiCall(body),

        onSuccess(data) {
            const { status, error, response } = data || {};

            if (!status) {
                throw new Error(error);
            }

            router.refresh();

            showToast({ type: 'success', message: response });
        },
        onError(error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'success', message: errorMessage });
        },
    });
