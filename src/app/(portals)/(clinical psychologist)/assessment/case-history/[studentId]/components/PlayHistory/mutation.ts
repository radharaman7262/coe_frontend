import React from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { QueryKeys } from '@/utils/queryKeys';

import { showToast } from '@/components/ui/Toaster/constant';

import { submitPlayHistory } from './utils.api';

export const useSubmitPlayHistory = ({
    setLoader,
}: {
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body: Record<string, string | number>) => submitPlayHistory(body),

        onSuccess(data) {
            const { isSuccess, error } = data || {};

            if (!isSuccess) {
                throw new Error(error);
            }

            queryClient.invalidateQueries({
                queryKey: [QueryKeys.CASE_HISTORY_SIDEBAR_MENU],
            });
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
};
