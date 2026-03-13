export interface PsychologistType {
    id: string;
    name: string;
    email: string;
    phone: string;
    specializations: {
        id: number;
        name: string;
    }[];
    assignedStudentsCount: number;
    status: number;
}
