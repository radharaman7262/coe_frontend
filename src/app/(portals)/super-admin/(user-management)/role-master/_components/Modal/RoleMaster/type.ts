import React from 'react';

export interface RoleMasterProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export type RoleMasterType = {
    id: number;
    name: string;
};

export interface FormValues {
    roleName: string;
    selectedUserType: RoleMasterType | null;
    searchFilter: string;
}

export enum RoleFormKeys {
    ROLE_NAME = 'roleName',
    SEARCH_FILTER = 'searchFilter',
    SELECTED_USER_TYPE = 'selectedUserType',
}
type StringOnlyRoleFormKeys = Exclude<RoleFormKeys, RoleFormKeys.SELECTED_USER_TYPE>;

type StringFieldMap = {
    [key in StringOnlyRoleFormKeys]: string;
};

export type RoleFormType = StringFieldMap & {
    [RoleFormKeys.SELECTED_USER_TYPE]: RoleMasterType | null;
};
export type RoleFormErrorType = {
    [key in RoleFormKeys]?: string;
};
