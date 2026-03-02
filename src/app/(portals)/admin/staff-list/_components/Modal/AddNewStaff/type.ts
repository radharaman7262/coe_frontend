/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface AddAdminStaffProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export type SpecializationType = {
    id: number;
    name: string;
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
    gender: genderType[];
    language: any[];
    assignRole: any[];
    selectedSpecialization: SpecializationType[];
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
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: SpecializationType[] | null;
    [AdminStaffFormKeys.GENDER]: genderType | null;
    [AdminStaffFormKeys.LANGUAGE]: [] | null;
    [AdminStaffFormKeys.ASSIGN_ROLE]: [] | null;
};

export type AdminStaffFormErrorType = {
    [key in AdminStaffFormKeys]?: string;
};

export type ErrorMessagesType = {
    [key in AdminStaffFormKeys]?: string;
};

export interface specializationType {
    createdAt: string;
    id: string;
    name: string;
    status: number;
    updatedAt: string;
}

export interface centerDropDownListType {
    centerId: string;
    name: string;
}
