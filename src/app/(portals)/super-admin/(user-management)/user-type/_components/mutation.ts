import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { useMutation } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { AddUserTypePayload } from '@/types/addUserTypePayload';
import { UpdateUserTypePayload } from '@/types/updateUserTypePayload';

import { LOADING_TIME_DURATION, StatusNumberString } from '@/constant/appConstants';

import { AddUserTypeApiCall, UpdateUserTypeAPICall, UpdateUserTypeStatusAPICall } from '../utils';

export type MutationPayload = {
    id?: string;
    body?: AddUserTypePayload | UpdateUserTypePayload;
    status?: string;
};

export const useAddUserTypeMutation = ({
    router,
    setLoader,
    setShow,
}: {
    router: AppRouterInstance;
    setLoader: (state: boolean) => void;
    setShow: (state: boolean) => void;
}) =>
    useMutation({
        mutationFn: ({ id, body, status }: MutationPayload) => {
            if (id && status) {
                return UpdateUserTypeStatusAPICall({ id, status });
            }

            if (id && body) {
                return UpdateUserTypeAPICall(id, body as UpdateUserTypePayload);
            }

            if (body) {
                return AddUserTypeApiCall(body as AddUserTypePayload);
            }

            throw new Error('Invalid mutation payload');
        },

        onSuccess(_, variables) {
            let message = 'Success';

            if (variables.status) {
                message =
                    variables.status === StatusNumberString.ACTIVE
                        ? 'Activated Successfully'
                        : 'Deactivated Successfully';
            } else if (variables.id) {
                message = 'User Type Updated Successfully';
                setShow(false);
            } else {
                message = 'User Type Added Successfully';
                setShow(false);
            }

            showToast({ type: 'success', message });

            setTimeout(() => {
                router.refresh();
            }, LOADING_TIME_DURATION);
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
