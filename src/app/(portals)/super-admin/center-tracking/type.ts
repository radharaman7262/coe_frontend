export interface getCenterTrackListType {
    centerId: string;
    centerName: string;
    centerAdminId: string;
    centerAdmin: string;
    staffCount: string;
    studentCount: string;
}

export interface getCenterStaffListType {
    id: string;
    name: string;
    specializationId: number;
    specialization: string;
    assignedStudents: number;
    status: number;
}

export interface getCenterStudentListType {
    studentId: string;
    studentName: string;
    gender: string;
    age: string;
    startTime: string;
    endTime: string;
    bookingDate: string;
    status: string;
}
