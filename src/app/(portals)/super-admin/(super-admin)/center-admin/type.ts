export interface specializationGetType {
    specializationId: string;
    specializationName: string;
}

export interface getCenterAdminListType {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roleId: string;
    roleName: string;
    specialization: specializationGetType[];
    centerId: string;
    centerName: string;
    status: number;
}
