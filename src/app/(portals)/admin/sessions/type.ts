export interface sessionDataType {
    age: number;
    bookingDate: string;
    endTime: null;
    gender: string;
    sessionId: string;
    specializations: string[];
    staffName: string;
    startTime: string;
    status: string;
    studentId: string;
    studentName: string;
}

export enum SessionStatusType {
    PENDING = '0',
    DONE = '1',
    SCHEDULED = '2',
}
