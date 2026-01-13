import React from 'react';

export interface MenuMasterProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export type ParentMenuType = {
    id: number;
    name: string;
};

export interface FormValues {
    menuName: string;
    menuURL: string;
    remarks: string;
    priority: string;
    selectedParentMenu: ParentMenuType | null;
    searchFilter: string;
}

export enum MenuMasterFormKeys {
    MENU_NAME = 'menuName',
    MENU_URL = 'menuURL',
    REMARKS = 'remarks',
    PRIORITY = 'priority',
    SELECTED_PARENT_MENU = 'selectedParentMenu',
    SEARCH_FILTER = 'searchFilter',
}
type StringOnlyMenuMasterFormKeys = Exclude<
    MenuMasterFormKeys,
    MenuMasterFormKeys.SELECTED_PARENT_MENU
>;

type StringFieldMap = {
    [key in StringOnlyMenuMasterFormKeys]: string;
};

export type MenuMasterFormType = StringFieldMap & {
    [MenuMasterFormKeys.SELECTED_PARENT_MENU]: ParentMenuType | null;
};
export type MenuMasterFormErrorType = {
    [key in MenuMasterFormKeys]?: string;
};
