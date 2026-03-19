export interface languageDataType {
    createdAt: string;
    id: string;
    name: string;
    status: number;
    updatedAt: string;
}

export type MedicalFormsType = Record<string, string | number | Record<string, string>>;
