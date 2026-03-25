export type slotType = {
    slotId: number;
    startTime: string;
    endTime: string;
    selected?: boolean;
};

export type bookingSlotType = {
    date: string;
    dateSelected: boolean;
    availableCount: number;
    slots: slotType[];
};

export type calendarItemType = {
    id: string;
    day: string;
    date: number;
    month: string;
    slotsCount: number;
};

type Booking = {
    bookingDate: string;
    slotIds: number[];
};

export type CreateSessionPayload = {
    studentId: number;
    bookings: Booking[];
    notes: string;
    goal: string;
    subGoal: string;
    toSpecializationId: number;
    sessionType: number;
    userId: number;
};
