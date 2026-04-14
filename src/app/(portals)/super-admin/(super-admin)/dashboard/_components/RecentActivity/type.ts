export interface studentCaseAssignedType {
    studentId: string;
    studentName: string;
    specialization: specializationDataType[];
    center: string;
    time: string;
    user: string;
}

export interface specializationDataType {
    id: string;
    name: string;
}

export interface newUserDataType {
    id: string;
    name: string;
    specialization: specializationDataType[];
    center: string;
    time: string;
}

export interface RecentActivityDataType {
    date: string;
    newUser: newUserDataType[];
    studentCaseAssigned: studentCaseAssignedType[];
}
