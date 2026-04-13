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

export const useChangePassword = ({ setLoader }: { setLoader: (val: boolean) => void }) =>
    useMutation({
        mutationFn: changePasswordApiCall,

        onMutate() {
            setLoader(true);
        },

        onSuccess(data) {
            showToast({
                type: 'success',
                message: data?.message || 'Password updated successfully',
            });
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
