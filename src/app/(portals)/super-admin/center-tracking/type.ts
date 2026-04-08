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
    centerId: string;
    centerName: string;
    centerAdminId: string;
    centerAdmin: string;
    staffCount: string;
    studentCount: string;
}
