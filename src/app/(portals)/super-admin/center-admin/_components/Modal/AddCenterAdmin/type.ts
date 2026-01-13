import React from 'react';

export interface AddCenterAdminProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export type SpecializationType = {
    id: number;
    name: string;
};

export type CenterType = {
    id: number;
    name: string;
};

export interface FormValues {
    firstName: string;
    lastName: string;
    phoneNo: string;
    emailId: string;
    selectedSpecialization: SpecializationType | null;
    selectedCenter: CenterType | null;
    searchFilter: string;
}

export enum CenterAdminFormKeys {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    PHONE_NO = 'phoneNo',
    EMAIL_ID = 'emailId',
    SELECTED_SPECIALIZATION = 'selectedSpecialization',
    SELECTED_CENTER = 'selectedCenter',
    SEARCH_FILTER = 'searchFilter',
}
type StringOnlyCenterAdminFormKeys = Exclude<
    CenterAdminFormKeys,
    CenterAdminFormKeys.SELECTED_SPECIALIZATION
>;

type StringFieldMap = {
    [key in StringOnlyCenterAdminFormKeys]: string;
};

export type CenterAdminFormType = StringFieldMap & {
    [CenterAdminFormKeys.SELECTED_SPECIALIZATION]: SpecializationType | null;
};
export type CenterAdminFormErrorType = {
    [key in CenterAdminFormKeys]?: string;
};
