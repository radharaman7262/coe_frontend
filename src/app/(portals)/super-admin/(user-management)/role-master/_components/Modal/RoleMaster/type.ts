import React, { Dispatch, SetStateAction } from 'react';
import { userDataType } from '../../../../user-type/_components/type';

export interface RoleMasterProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    roleId: number | null;
    setRoleId: Dispatch<SetStateAction<number | null>>;
}

export type RoleMasterType = {
    id: string;
    name: string;
    status: number;
};

export interface FormValues {
    roleName: string;
    selectedUserType: RoleMasterType | null;
}

export enum RoleFormKeys {
    ROLE_NAME = 'roleName',
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

export type userTypeDropdownOptionType = Pick<userDataType, 'id' | 'name' | 'status'>;
