/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { submitSpecialEducatorChildInformation } from '../../utils.api';

export const useChildInformationSubmit = ({ setLoader }: { setLoader: (state: boolean) => void }) =>
    useMutation({
        mutationFn: (body: any) => submitSpecialEducatorChildInformation(body),
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
