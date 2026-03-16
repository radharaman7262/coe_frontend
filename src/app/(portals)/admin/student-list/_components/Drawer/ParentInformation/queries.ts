import { languageTypeKeys } from '@/services/language';
import { StaleAndCacheTime } from '@/constant/appConstants';
import { useQuery } from '@tanstack/react-query';

import { getLanguageListApiCall } from '../utils.api';

export const useLanguageList = () =>
    useQuery({
        queryKey: languageTypeKeys.getLanguageTypeList(),

        queryFn: getLanguageListApiCall,

        select: (data) => data?.response?.data || [],

        staleTime: StaleAndCacheTime.STALE_TIME,

        gcTime: StaleAndCacheTime.CACHE_TIME,
    });
