import React from 'react';

export interface AddCenterAdminProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    centerAdminId: number | null;
    setCenterAdminId: React.Dispatch<React.SetStateAction<number | null>>;
}

export type SpecializationType = {
    id: number;
    name: string;
};

export type CenterType = {
    centerId: number;
    name: string;
};

export interface FormValues {
    firstName: string;
    lastName: string;
    phoneNo: string;
    emailId: string;
    selectedSpecialization: SpecializationType[] | [];
    selectedCenter: CenterType | null;
}

export enum CenterAdminFormKeys {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    PHONE_NO = 'phoneNo',
    EMAIL_ID = 'emailId',
    SELECTED_SPECIALIZATION = 'selectedSpecialization',
    SELECTED_CENTER = 'selectedCenter',
}

type StringOnlyCenterAdminFormKeys = Exclude<
    CenterAdminFormKeys,
    CenterAdminFormKeys.SELECTED_SPECIALIZATION | CenterAdminFormKeys.SELECTED_CENTER
>;

type StringFieldMap = {
    [key in StringOnlyCenterAdminFormKeys]: string;
};

export type CenterAdminFormType = StringFieldMap & {
    [CenterAdminFormKeys.SELECTED_SPECIALIZATION]: SpecializationType[] | null;
    [CenterAdminFormKeys.SELECTED_CENTER]: CenterType | null;
};

export type CenterAdminFormErrorType = {
    [key in CenterAdminFormKeys]?: string;
};

export type ErrorMessagesType = {
    [key in CenterAdminFormKeys]?: string;
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
