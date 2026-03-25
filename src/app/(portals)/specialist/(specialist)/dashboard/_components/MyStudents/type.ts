export type StudentType = {
    id: string;
    name: string;
    age: number;
    gender: string;
    processStatus: string;
};

export enum StudentStatusType {
    ALL_STATUS = '0',
    PENDING = '1',
    IN_PROGRESS = '2',
    DONE = '3',
}
