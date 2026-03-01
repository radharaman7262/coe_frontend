import React from 'react';

export interface UserTypeProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    onSubmit: () => void;
    isEditMode: boolean;
    isLoading: boolean;
}

export interface FormValues {
    userType: string;
}

export enum UserTypeFormKeys {
    USER_TYPE = 'userType',
}

export type UserTypeFormErrorType = {
    [key in UserTypeFormKeys]?: string;
};
