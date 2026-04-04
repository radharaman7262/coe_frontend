import { languageTypeKeys } from '@/services/language';
import { StaleAndCacheTime } from '@/constant/appConstants';
import { useQuery } from '@tanstack/react-query';

import { blockTypeKeys, districtTypeKeys, stateTypeKeys } from '@/services/state';

import {
    getBlockListApiCall,
    getDistrictListApiCall,
    getLanguageListApiCall,
    getStateListApiCall,
} from '../utils.api';

export const useLanguageList = () =>
    useQuery({
        queryKey: languageTypeKeys.getLanguageTypeList(),

        queryFn: getLanguageListApiCall,

        select: (data) => data?.response?.data || [],

        staleTime: StaleAndCacheTime.STALE_TIME,

        gcTime: StaleAndCacheTime.CACHE_TIME,
    });

export const useGetStateList = () =>
    useQuery({
        queryKey: stateTypeKeys.getStateTypeList(),
        queryFn: () => getStateListApiCall(),
    });

export const useGetDistrictList = (stateId?: number) =>
    useQuery({
        queryKey: [...districtTypeKeys.getDistrictTypeList(), stateId],
        queryFn: () => getDistrictListApiCall(stateId as number),
    });

export const useGetBlockList = (districtId?: number) =>
    useQuery({
        queryKey: [...blockTypeKeys.getBlockTypeList(), districtId],
        queryFn: () => getBlockListApiCall(districtId as number),
    });
