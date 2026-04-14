export interface userDataType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}

export interface UserTypePageProps {
    userData: userDataType[];
}
