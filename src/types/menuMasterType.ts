import React from 'react';

export interface menuMasterType {
    id: string;
    menuName: string;
    menuLink: string;
    priority: number;
    remarks: string | null;
    parentId: number | null;
    parentMenu: string | null;
    isParent: string;
    status: number;
}

export interface MenuMasterTableDataType {
    status: React.JSX.Element;
    edit: React.JSX.Element;
    id: string;
    menuName: string;
    menuLink: string;
    priority: number;
    remarks: string | null;
    parentId: number | null;
    parentMenu: string | null;
    isParent: string;
}
