export interface TrackSessionType {
    studentId: string;
    name: string;
    age: number;
    gender: string;

    user: {
        id: string;
        name: string;
        specializations: string[];
    };

    slotDate: string;
    startTime: string;
    endTime: string;

    slotStatus: string;
}

export enum TrackSessionStatusType {
    PENDING = '0',
    DONE = '1',
    SCHEDULED = '2',
}
