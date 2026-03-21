import { therpistDurationTypeKeys } from '@/services/therpistDuration';

import { useQuery } from '@tanstack/react-query';

import { levelOfSupportTypeKeys } from '@/services/levelOfSupport';

import { getLevelOfSupportApiCall, getTherpistDurationApiCall } from './utils';

export const useGetTherpistDurationList = () =>
    useQuery({
        queryKey: therpistDurationTypeKeys.getTherpistDurationList(),
        queryFn: () => getTherpistDurationApiCall(),
    });

export const useGetLevelOfSupportList = () =>
    useQuery({
        queryKey: levelOfSupportTypeKeys.getLevelOfSupportList(),
        queryFn: () => getLevelOfSupportApiCall(),
    });
