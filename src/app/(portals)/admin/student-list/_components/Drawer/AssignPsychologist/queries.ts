import { psychologistTypeKeys } from '@/services/psychologist';
import { useQuery } from '@tanstack/react-query';
import { StaleAndCacheTime } from '@/constant/appConstants';
import { getPsychologistApiCall } from '../utils.api';

export const usePsychologistList = () =>
    useQuery({
        queryKey: psychologistTypeKeys.getPsychologistTypeList(),

        queryFn: getPsychologistApiCall,

        select: (data) => data?.response || [],

        staleTime: StaleAndCacheTime.STALE_TIME,

        gcTime: StaleAndCacheTime.CACHE_TIME,
    });
