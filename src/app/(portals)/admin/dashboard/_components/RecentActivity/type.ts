export type Specialization = {
    SpecializationName: string;
    Id: string;
    userId: string;
};

export type NewUserAdded = {
    userId: string;
    name: string;
    dateTime: string;
    specialization: Specialization[];
};

export type Assigned = {
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
    assigned: Assigned[];
};

export interface DashboardActivityResponse {
    today: ActivityGroup;
    yesterday: ActivityGroup;
}
