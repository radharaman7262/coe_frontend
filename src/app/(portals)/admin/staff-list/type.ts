export interface staffListDataType {
    id: string;
    name: string;
    email: string;
    role: string;
    specialist: string[];
    phone: string;
    assignedStudents: number;
    status: number;
}

export enum StaffStatusType {
    DeActivate = '0',
    Active = '1',
}
