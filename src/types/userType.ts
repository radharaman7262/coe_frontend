export interface UserType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}

export interface UserTypePayload {
    name: string;
}
