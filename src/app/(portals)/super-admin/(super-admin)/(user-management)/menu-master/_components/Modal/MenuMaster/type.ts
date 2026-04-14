import { menuMasterType } from '@/types/menuMasterType';
import React from 'react';

export interface MenuMasterProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    menuMasterList: menuMasterType[];
    onSubmit: () => void;
    isEditMode: boolean;
    isParentChecked: boolean;
    setIsParentChecked: (state: boolean) => void;
}

export type ParentMenuType = {
    id: string;
    name: string;
};

export interface FormValues {
    menuName: string;
    menuURL: string;
    remarks: string;
    priority: string;
    selectedParentMenu: ParentMenuType | null;
    searchFilter: string;
    isParent: boolean;
}

export enum MenuMasterFormKeys {
    MENU_NAME = 'menuName',
    MENU_URL = 'menuURL',
    REMARKS = 'remarks',
    PRIORITY = 'priority',
    SELECTED_PARENT_MENU = 'selectedParentMenu',
    SEARCH_FILTER = 'searchFilter',
    IS_PARENT = 'isParent',
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
