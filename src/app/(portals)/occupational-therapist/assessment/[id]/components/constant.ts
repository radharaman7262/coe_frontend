import { OTFormKeys, OTFormType } from '@/types/OTchildInformationType';

export const textAreaFields = [{ label: 'Diagnosis', name: 'diagnosis' }];

export type InputFieldType = {
    label: string;
    name: OTFormKeys;
    type: 'input' | 'date' | 'radio';
    options?: string[];
};

export const inputFields: InputFieldType[] = [
    { label: 'Name of Child', name: OTFormKeys.NAME, type: 'input' },
    { label: 'Age', name: OTFormKeys.AGE, type: 'date' },
    { label: 'Gender', name: OTFormKeys.GENDER, type: 'input' },
    { label: 'DOB', name: OTFormKeys.DOB, type: 'date' },

    { label: 'Referral Source', name: OTFormKeys.REFERRAL_SOURCE, type: 'input' },

    {
        label: 'Informant',
        name: OTFormKeys.INFORMANT,
        type: 'radio',
        options: ['Parent', 'Teacher', 'Other'],
    },

    {
        label: 'Mode of Assessment',
        name: OTFormKeys.MODE_OF_ASSESSMENT,
        type: 'radio',
        options: ['In-person', 'Online', 'Home Visit'],
    },
];

export const INITIAL_STATE: OTFormType = {
    [OTFormKeys.STUDENT_ID]: '',
    [OTFormKeys.NAME]: '',
    [OTFormKeys.GENDER]: '',
    [OTFormKeys.DIAGNOSIS]: '',
    [OTFormKeys.REFERRAL_SOURCE]: '',
    [OTFormKeys.INFORMANT]: '',
    [OTFormKeys.MODE_OF_ASSESSMENT]: '',
    [OTFormKeys.DOB]: null,
    [OTFormKeys.AGE]: null,

    informantOther: '',
};
