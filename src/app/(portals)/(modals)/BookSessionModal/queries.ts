import { useQuery } from '@tanstack/react-query';

import { bookingSlotKeys } from '@/services/boookingTimeSlot';

import { getTimeAndSlotApiCall } from '../utils.api';

export const useGetBookingTimeSlotList = ({
    studentId,
    startDate,
    endDate,
}: {
    studentId: string;
    startDate: string;
    endDate: string;
}) =>
    useQuery({
        queryKey: bookingSlotKeys.getBookingSlotList({
            studentId,
            startDate,
            endDate,
        }),
        queryFn: () =>
            getTimeAndSlotApiCall({
                studentId,
                startDate,
                endDate,
            }),
    });
