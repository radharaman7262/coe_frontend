export interface sessionSchedule {
    date: string;
    startTime: string;
    endTime: string;
}

export interface studentDataType {
    studentId: string;
    name: string;
    age: number;
    gender: string;
    sessionSchedule: sessionSchedule;
    assignedPsychologist: string;
    sessionStatus: string;
}
