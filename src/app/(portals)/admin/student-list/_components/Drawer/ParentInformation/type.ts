export type SiblingType = {
    id: number;
    name: string;
};

export type OccupationType = {
    id: number;
    name: string;
};

export interface FormValues {
    fathersName: string;
    fathersAge: number | null;
    fathersOccupation: OccupationType | null;
    fathersNo: number | null;
    mothersName: string;
    mothersAge: number | null;
    mothersOccupation: OccupationType | null;
    mothersNo: number | null;
    siblingType: SiblingType | null;
    familyType: string | null;
    language: LanguageType | null;
    files: File[];
}

export enum ParentFormKeys {
    FATHERS_NAME = 'fathersName',
    FATHERS_AGE = 'fathersAge',
    FATHERS_OCCUPATION = 'fathersOccupation',
    FATHERS_NUMBER = 'fathersNo',
    MOTHERS_NAME = 'mothersName',
    MOTHERS_AGE = 'mothersAge',
    MOTHERS_OCCUPATION = 'mothersOccupation',
    MOTHERS_NUMBER = 'mothersNo',
    SIBLING_TYPE = 'siblingType',
    FAMILY_TYPE = 'familyType',
    LANGUAGE = 'language',
    FILES = 'files',
}

export interface LanguageType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}
