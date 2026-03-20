export interface UserDataType {
    userId: string;
    name: string;
    role: string;
    specializations: {
        specializationId: number;
        specialization: string;
    }[];
    studentsAssigned: number;
}

export interface SelectedAssignment {
    toId: number;
    toSpecializationId: string;
}
