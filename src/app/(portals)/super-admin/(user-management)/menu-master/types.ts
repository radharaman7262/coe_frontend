export interface userAddMutationBody {
    menuName: string;
    menuLink: string;
    remarks: string;
    priority: string;
    parentId: string | null;
    isParent: string;
}

export interface updateMenuMasterBody {
    name: string;
    menuLink: string;
    remarks: string;
    priority: string;
    parentId: string | null;
    isParent: string;
}
