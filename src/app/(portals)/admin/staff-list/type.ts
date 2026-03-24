interface getSpecializationTableType {
    specialization: string;
    specializationId: number;
}

interface languageDataType {
    languageId: number;
    language: string;
}

export interface staffListDataType {
    id: string;
    name: string;
    email: string;
    roleId: string;
    role: string;
    specialist: getSpecializationTableType[];
    phone: string;
    assignedStudents: number;
    status: number;
    totalYearOfExperience: string;
    languages: languageDataType[];
    gender: string;
}

export interface GetStaffListDataType {
    id: string;
    name: string;
    email: string;
    role: string;
    specialist: { specializationId: number; specialization: string }[] | [];
    phone: string;
    assignedStudents: number;
    status: number;
    totalYearOfExperience: string;
    languages: { languageId: number; language: string }[] | [];
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
