export interface MapMenuStateType {
    roleId: string;
    menuId: string;
}

interface MenuListType {
    id: number;
    name: string;
    parentId: number | null;
}

interface PermissionType {
    menuId: string;
    menuName: string;
}

interface roleListType {
    roleId: string;
    roleName: string;
    permissions: PermissionType[];
}

export interface MenuDataType {
    menuList: MenuListType[];
    roles: roleListType[];
}
