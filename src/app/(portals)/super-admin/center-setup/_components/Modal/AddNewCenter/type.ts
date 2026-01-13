import React from 'react';

export interface AddNewCentreProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export type AdminType = {
    id: number;
    name: string;
};

export interface FormValues {
    centerName: string;
    address: string;
    contactDetails: string;
    selectedAdmin: AdminType | null;
    searchFilter: string;
}

export enum CenterSetupFormKeys {
    CENTER_NAME = 'centerName',
    ADDRESS = 'address',
    CONTACT_DETAILS = 'contactDetails',
    SELECTED_ADMIN = 'selectedAdmin',
    SEARCH_FILTER = 'searchFilter',
}
type StringOnlyCenterSetupFormKeys = Exclude<
    CenterSetupFormKeys,
    CenterSetupFormKeys.SELECTED_ADMIN
>;

type StringFieldMap = {
    [key in StringOnlyCenterSetupFormKeys]: string;
};

export type CenterSetupFormType = StringFieldMap & {
    [CenterSetupFormKeys.SELECTED_ADMIN]: AdminType | null;
};
export type CenterSetupFormErrorType = {
    [key in CenterSetupFormKeys]?: string;
};
