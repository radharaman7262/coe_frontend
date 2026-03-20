/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { submitChildInformation } from '../../utils.api';

export const useChildInformationSubmit = ({ setLoader }: { setLoader: (state: boolean) => void }) =>
    useMutation({
        mutationFn: (body: any) => submitChildInformation(body),
        onSuccess: (data) => {
            const { isSuccess, error } = data || {};

            if (!isSuccess) {
                throw new Error(error);
            }
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
