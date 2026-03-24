export type Specialization = {
    SpecializationName: string;
    Id: string;
    userId: string;
};

export type NewUserAdded = {
    userId: string;
    name: string;
    dateTime: string;
    center: string;
    state: string;
    specialization: Specialization[];
};

export type StudentCaseAssigned = {
    dateTime: string;
    specialization: Specialization[];
    studentId: string;
    studentName: string;
    userId: string;
    userName: string;
};

export type ActivityGroup = {
    newUserAdded: NewUserAdded[];
    studentCaseAssigned: StudentCaseAssigned[];
};

export interface DashboardActivityResponse {
    today: ActivityGroup;
    yesterday: ActivityGroup;
}
