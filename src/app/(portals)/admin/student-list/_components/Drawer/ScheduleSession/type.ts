export type SchedulePayload = {
    slotId: number;
    userId: number;
    studentId: number;
    bookingDate: string;
    notes: string;
    toSpecializationId: number;
};

interface Slot {
    slotId: string;
    startTime: string;
    endTime: string;
}

export interface Schedule {
    date: string;
    bookedSlots: number;
    availableSlotsCount: number;
    slots: Slot[];
}
