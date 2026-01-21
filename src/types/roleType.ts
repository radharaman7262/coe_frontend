export interface RoleType {
    id: string;
    createdAt: string;
    roleName: string;
    status: number;
    userTypeId: string;
    userTypeName: string;
}
export interface LoggedRoleType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}
