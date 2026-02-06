import React from 'react';

export interface menuMasterType {
    id: string;
    menuName: string;
    menuLink: string;
    priority: string;
    remarks: string | null;
    parentId: string | null;
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
    priority: string;
    remarks: string | null;
    parentId: string | null;
    parentMenu: string | null;
    isParent: string;
}
