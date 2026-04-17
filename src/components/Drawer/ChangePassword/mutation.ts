import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { showToast } from '@/components/ui/Toaster/constant';
import { LOADING_TIME_DURATION } from '@/constant/appConstants';
import { changePasswordApiCall } from './utils';

type ApiError = {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
};

export const useChangePassword = ({
    setLoader,
    setOpen,
}: {
    setLoader: (val: boolean) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
    useMutation({
        mutationFn: changePasswordApiCall,

        onMutate() {
            setLoader(true);
        },

        onSuccess(data) {
            const { status, message } = data || {};

            if (!status) {
                throw new Error(message);
            }

            showToast({
                type: 'success',
                message: message || 'Password updated successfully',
            });

            setTimeout(() => {
                setOpen(false);
            }, LOADING_TIME_DURATION);
        },

        onError(error: ApiError) {
            const message =
                error?.response?.data?.message || error?.message || 'Something went wrong';

            showToast({
                type: 'error',
                message,
            });
        },

        onSettled() {
            setTimeout(() => {
                setLoader(false);
            }, LOADING_TIME_DURATION);
        },
    });
