export interface CenterAdminPayloadType {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roleId: string;
    centerId: string;
    specialization: { id: string }[];
}
