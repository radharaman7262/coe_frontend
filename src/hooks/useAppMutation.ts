/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { showToast } from '@/components/ui/Toaster/constant';

export const useAppMutation = <TBody = any, TResponse = any>({
    mutationFn,
    setLoader,
    invalidateKeys = [],
}: {
    mutationFn: (body: TBody) => Promise<TResponse>;
    setLoader?: React.Dispatch<React.SetStateAction<boolean>>;
    invalidateKeys?: unknown[][];
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,

        onMutate() {
            setLoader?.(true);
        },

        onSuccess(data: any) {
            const { status, error } = data || {};

            if (!status) {
                throw new Error(error);
            }

            // invalidate queries
            invalidateKeys.forEach((key) => {
                queryClient.invalidateQueries({ queryKey: key });
            });

            showToast({ type: 'success', message: 'Data submitted successfully' });
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
