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
    addressLine: string;
    siblingType: SiblingType | null;
    familyType: string | null;
    language: LanguageType | null;
    files: File[];
    state: StateType | null;
    district: DistrictType | null;
    block: BlockType | null;
    pinCode: number | null;
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
    ADDRESS_LINE = 'addressLine',
    SIBLING_TYPE = 'siblingType',
    FAMILY_TYPE = 'familyType',
    LANGUAGE = 'language',
    FILES = 'files',
    STATE = 'state',
    DISTRICT = 'district',
    BLOCK = 'block',
    PINCODE = 'pinCode',
}

export interface LanguageType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}

export type StateType = {
    id: number;
    name: string;
    code: string;
    countryID: number;
    countryName: string;
    status: number;
    priority: number;
    createdDate?: string;
    updatedDate?: string | null;
    createdBy?: number;
    updatedBy?: number | null;
};

export type DistrictType = {
    id: number;
    name: string;
    code: string;
    stateID: number;
    stateName: string;
    divisionID: number;
    divisionName: string;
    status: number;
    priority: number;
};

export type BlockType = {
    id: number;
    name: string;
    code: string;
    status: number;
    priority: number;
    districtId: number;
    distrcitName: string;
    createdDate?: string;
    updatedDate?: string | null;
    createdBy?: number;
    updatedBy?: number | null;
};
