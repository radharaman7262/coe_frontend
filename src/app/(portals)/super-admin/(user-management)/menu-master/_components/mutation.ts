import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { useMutation } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION, StatusNumberString } from '@/constant/appConstants';

import { queryClient } from '@/utils/react-query-client';
import { menuMasterTypeKeys } from '@/services/menuMaster';
import { updateMenuMasterBody, userAddMutationBody } from '../types';

import {
    AddMenuMastereApiCall,
    UpdateMenuMasterApiCall,
    UpdateMenuMasterTypeStatusAPICall,
} from '../utils';

export const useAddMenuMasterMutation = ({
    setLoader,
    setShow,
    router,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
}) =>
    useMutation({
        mutationFn: (body: userAddMutationBody) => AddMenuMastereApiCall(body),

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

export const useUpdateMenuMasterMutation = ({
    setLoader,
    setShow,
    router,
}: {
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
    router: AppRouterInstance;
}) =>
    useMutation({
        mutationFn: ({ id, body }: { id: string; body: updateMenuMasterBody }) =>
            UpdateMenuMasterApiCall(id, body),

        onMutate() {
            setLoader(true);
        },

        onSuccess(data) {
            if (!data?.status) {
                throw new Error(data?.error);
            }

            showToast({ type: 'success', message: 'Menu Updated Successfully' });
            setShow(false);
            router.refresh();
        },

        onError(error) {
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        },

        onSettled() {
            setTimeout(() => setLoader(false), LOADING_TIME_DURATION);
        },
    });

export const useChangeMenuMasterStatusMutation = ({
    setLoader,
}: {
    setLoader: (state: boolean) => void;
}) =>
    useMutation({
        mutationFn: ({
            id,
            status,
        }: {
            id: string;
            status: StatusNumberString.INACTIVE | StatusNumberString.ACTIVE;
        }) =>
            UpdateMenuMasterTypeStatusAPICall({
                id,
                status,
            }),

        onMutate() {
            setLoader(true);
        },

        onSuccess(data, variables) {
            if (!data?.status) {
                throw new Error(data?.error);
            }

            showToast({
                type: 'success',
                message:
                    variables.status === '1'
                        ? 'Status activated successfully'
                        : 'Status deactivated successfully',
            });

            queryClient.invalidateQueries({
                queryKey: menuMasterTypeKeys.all,
            });
        },

        onError(error) {
            showToast({
                type: 'error',
                message: error instanceof Error ? error.message : String(error),
            });
        },

        onSettled() {
            setTimeout(() => {
                setLoader(false);
            }, LOADING_TIME_DURATION);
        },
    });
