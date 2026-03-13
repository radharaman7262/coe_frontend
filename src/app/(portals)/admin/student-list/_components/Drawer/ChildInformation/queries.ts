import { useQuery } from '@tanstack/react-query';
import { StaleAndCacheTime } from '@/constant/appConstants';

import { schoolTypeKeys } from '@/services/school';
import { gradeKeys } from '@/services/grade';
import { getGradeListApiCall, getSchoolListApiCall } from './utils.api';

export const useSchoolTypeList = (udiseCode: string) =>
    useQuery({
        queryKey: schoolTypeKeys.getSchoolByUdise(udiseCode),

        queryFn: () => getSchoolListApiCall({ udiseCode }),

        enabled: udiseCode.length === 11,

        select: (data) => data?.response?.data?.response?.[0] || null,

        staleTime: StaleAndCacheTime.STALE_TIME,

        gcTime: StaleAndCacheTime.CACHE_TIME,
    });

export const useGradeList = () =>
    useQuery({
        queryKey: gradeKeys.getGradeTypeList(),

        queryFn: getGradeListApiCall,

        select: (data) => data?.response || [],

        staleTime: StaleAndCacheTime.STALE_TIME,

        gcTime: StaleAndCacheTime.CACHE_TIME,
    });
