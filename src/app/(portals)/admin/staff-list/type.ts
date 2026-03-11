export interface staffListDataType {
    id: string;
    name: string;
    email: string;
    role: string;
    specialist: string[];
    phone: string;
    assignedStudents: number;
    status: number;
    totalYearExperience: string;
    language: string[];
}

export enum StaffStatusType {
    DeActivate = '0',
    Active = '1',
}

export interface staffListPayloadDataType {
    name: string;
    email: string;
    phone: string;
    gender: string;
    roleId: string;
    languages: number[];
    specializations: number[];
    totalYearExperience: string;
}
