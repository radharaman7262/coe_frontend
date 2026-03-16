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
    fromUserId: string;
    fromUsername: string;
    toUserId: string;
    toUsername: string;
    studentId: string;
    studentName: string;
    dateTime: string;
    fromUserSpecialization: Specialization[];
    toUserSpecialization: Specialization[];
};

export type ActivityGroup = {
    newUserAdded: NewUserAdded[];
    studentCaseAssigned: StudentCaseAssigned[];
};

export interface DashboardActivityResponse {
    today: ActivityGroup;
    yesterday: ActivityGroup;
}
