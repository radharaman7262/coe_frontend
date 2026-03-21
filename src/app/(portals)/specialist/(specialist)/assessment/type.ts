export interface AssessmentStudentType {
    studentId: string;
    studentName: string;
    gender: string;
    gradeId: string;
    dob: string;
    age: string;
    psychologist: string;
    processStatus: string;
    bookingDate: string;
    sessionStatus: string;
    startTime: string;
    endTime: string;
}

export enum AssessmentStatusType {
    PENDING = '0',
    SCHEDULED = '1',
}
