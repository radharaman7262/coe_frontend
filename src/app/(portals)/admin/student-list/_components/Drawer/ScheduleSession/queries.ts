import { psychologistDateListKeys } from '@/services/psychologistDates';

import { useQuery } from '@tanstack/react-query';

import { getPsychologistDatesListApiCall } from '../utils.api';

export const useGetPsychologistDatesList = ({
    userId,
    startDate,
    endDate,
}: {
    userId: string;
    startDate: string;
    endDate: string;
}) =>
    useQuery({
        queryKey: psychologistDateListKeys.getpsycoholgistDateList({
            userId,
            startDate,
            endDate,
        }),
        queryFn: () =>
            getPsychologistDatesListApiCall({
                userId,
                startDate,
                endDate,
            }),
    });
