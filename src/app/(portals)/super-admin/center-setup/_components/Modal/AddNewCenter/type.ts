import React from 'react';

export enum FormField {
    CENTER_NAME = 'centerName',
    ADDRESS = 'address',
    CONTACT_DETAILS = 'contactDetails',
    SELECTED_ADMIN = 'selectedAdmin',
    SEARCH_FILTER = 'searchFilter',
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
export interface AddNewCentreProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}
