import { useMutation } from '@tanstack/react-query';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { LOADING_TIME_DURATION, StatusNumberString } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

import {
    addRoleMasterApiCall,
    changeRoleMasterStatusApiCall,
    updaterRoleMasterApiCall,
} from './utils';
import { ROLE_ACTIVE_STATUS_MESSAGE, ROLE_INACTIVE_STATUS_MESSAGE } from './_components/constant';

export const useAddRoleMasterMutation = ({
    setLoader,
    setShow,
    router,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
}) =>
    useMutation({
        mutationFn: (body: { name: string; userTypeId: string }) => addRoleMasterApiCall(body),

        onSuccess(data) {
            const { status, error, response } = data || {};

            if (!status) {
                throw new Error(error);
            }

            router.refresh();

            setShow(false);
            showToast({ type: 'success', message: response });
        },

        onMutate() {
            setLoader(true);
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

export const useUpdateRoleMasterMutation = ({
    setLoader,
    setShow,
    router,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
}) =>
    useMutation({
        mutationFn: (body: { id?: string; name: string; userTypeId: string }) =>
            updaterRoleMasterApiCall(body),

        onSuccess(data) {
            const { status, error, response } = data || {};

            if (!status) {
                throw new Error(error);
            }

            router.refresh();

            showToast({ type: 'success', message: response });
            setShow(false);
        },

        onMutate() {
            setLoader(true);
        },
        onError(error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'success', message: errorMessage });
        },
        onSettled() {
            setTimeout(() => {
                setLoader(false);
            }, LOADING_TIME_DURATION);
        },
    });

export const useChangeRoleMasterStatusMutation = ({ router }: { router: AppRouterInstance }) =>
    useMutation({
        mutationFn: (body: { id: string; status?: string }) => changeRoleMasterStatusApiCall(body),

        onSuccess(data) {
            const { status, error, response } = data || {};

            if (!status) {
                throw new Error(error);
            }

            router.refresh();

            const { status: responseStatus } = response || {};

            const showMessage =
                responseStatus.toString() === StatusNumberString.ACTIVE
                    ? ROLE_ACTIVE_STATUS_MESSAGE
                    : ROLE_INACTIVE_STATUS_MESSAGE;

            showToast({ type: 'success', message: showMessage });
        },
        onError(error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'success', message: errorMessage });
        },
    });
