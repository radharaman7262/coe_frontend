export interface AssessmentStudentType {
    sessionId: string;
    userId: string;
    studentId: string;
    studentName: string;
    gender: string;
    age: string;
    gradeId: string;
    fatherName: string;
    startTime: string;
    endTime: string;
    bookingDate: string;
    status: string;
    transferredEducators: string[];
}

export enum AssessmentStatusType {
    PENDING = '0',
    DONE = '1',
    SCHEDULED = '2',
}
