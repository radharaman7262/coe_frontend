import { Dayjs } from 'dayjs';

export type GenderType = {
    id: number;
    name: string;
};

export type SchoolType = {
    id: number;
    name: string;
};
export interface FormValues {
    fullName: string;
    gender: GenderType | null;
    dateoFBirth: Dayjs | null;
    schoolType: SchoolType | null;
    udiseCode: string;
    schoolName: string;
    grade: GradeType | null;
    difficultiesFaced: string;
}

export enum ChildFormKeys {
    FULL_NAME = 'fullName',
    GENDER = 'gender',
    DATE_OF_BIRTH = 'dateoFBirth',
    SCHOOL_TYPE = 'schoolType',
    UDISE_CODE = 'udiseCode',
    SCHOOL_NAME = 'schoolName',
    GRADE = 'grade',
    DIFFICULTIES_FACED = 'difficultiesFaced',
}

export interface GradeType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}

export interface SchoolPayloadType {
    udiseCode: string;
}
