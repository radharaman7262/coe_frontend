import { QueryKeys } from '@/utils/queryKeys';

export const bookingSlotKeys = {
    all: [QueryKeys.GET_BOOKING_SLOT],
    getBookingSlotList: (params: { studentId: string; startDate: string; endDate: string }) =>
        [...bookingSlotKeys.all, params] as const,
};
