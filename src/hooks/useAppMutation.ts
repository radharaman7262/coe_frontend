/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

export const useAppMutation = <TBody = any, TResponse = any>({
    mutationFn,
    setLoader,
    invalidateKeys = [],
    successMessage,
}: {
    mutationFn: (body: TBody) => Promise<TResponse>;
    setLoader?: React.Dispatch<React.SetStateAction<boolean>>;
    invalidateKeys?: unknown[][];
    successMessage?: string;
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,

        onMutate() {
            setLoader?.(true);
        },

        onSuccess(data: any) {
            const { isSuccess, error } = data || {};

            if (!isSuccess) {
                throw new Error(error);
            }

            // invalidate queries
            invalidateKeys.forEach((key) => {
                queryClient.invalidateQueries({ queryKey: key });
            });

            if (successMessage) {
                showToast({ type: 'success', message: successMessage });
            }
        },

        onError(error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'error', message: errorMessage });
        },

        onSettled() {
            setTimeout(() => {
                setLoader?.(false);
            }, LOADING_TIME_DURATION);
        },
    });
};
