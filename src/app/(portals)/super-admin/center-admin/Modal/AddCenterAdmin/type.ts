export interface AddCenterAdminProps {
    open: boolean;
    setOpen: (state: boolean) => void;
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

export enum FormField {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    PHONE_NO = 'phoneNo',
    EMAIL_ID = 'emailId',
    SELECTED_SPECIALIZATION = 'selectedSpecialization',
    SELECTED_CENTER = 'selectedCenter',
    SEARCH_FILTER = 'searchFilter',
}
