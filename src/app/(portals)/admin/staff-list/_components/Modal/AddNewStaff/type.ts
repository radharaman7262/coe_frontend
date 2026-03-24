import React from 'react';

import { languageDataType } from '@/app/(portals)/type';
import { RoleType } from '@/types/roleType';

export interface AddAdminStaffProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    AdminStaffId: number | null;
    setAdminStaffId: React.Dispatch<React.SetStateAction<number | null>>;
}

export type specializationType = {
    createdAt?: string;
    id: number;
    name: string;
    status?: number;
    updatedAt?: string;
};

export type genderType = {
    id: number;
    name: string;
};

export interface FormValues {
    name: string;
    phoneNo: string;
    emailId: string;
    totalYearExperience: string;
    gender: genderType | null;
    language: languageDataType[];
    assignRole: RoleType | null;
    selectedSpecialization: specializationType | null;
}

export enum AdminStaffFormKeys {
    NAME = 'name',
    GENDER = 'gender',
    EMAIL_ID = 'emailId',
    PHONE_NO = 'phoneNo',
    TOTAL_YEAR_EXPERIENCE = 'totalYearExperience',
    LANGUAGE = 'language',
    ASSIGN_ROLE = 'assignRole',
    SELECTED_SPECIALIZATION = 'selectedSpecialization',
}

type StringOnlyAdminStaffFormKeys = Exclude<
    AdminStaffFormKeys,
    | AdminStaffFormKeys.SELECTED_SPECIALIZATION
    | AdminStaffFormKeys.GENDER
    | AdminStaffFormKeys.ASSIGN_ROLE
    | AdminStaffFormKeys.LANGUAGE
>;

type StringFieldMap = {
    [key in StringOnlyAdminStaffFormKeys]: string;
};

export type AdminStaffFormType = StringFieldMap & {
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: specializationType | null;
    [AdminStaffFormKeys.GENDER]: genderType | null;
    [AdminStaffFormKeys.LANGUAGE]: languageDataType[] | null;
    [AdminStaffFormKeys.ASSIGN_ROLE]: RoleType | null;
};

export type AdminStaffFormErrorType = {
    [key in AdminStaffFormKeys]?: string;
};

export type ErrorMessagesType = {
    [key in AdminStaffFormKeys]?: string;
};
export interface centerDropDownListType {
    centerId: string;
    name: string;
}
