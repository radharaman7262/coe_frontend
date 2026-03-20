import {
    SpeechTherapistStudentFormKeys,
    SpeechTherapistStudentFormType,
} from '@/types/speechTherapistChildInformationType';

export const textAreaFields = [{ label: 'Diagnosis', name: 'diagnosis' }];

export type InputFieldType = {
    label: string;
    name: SpeechTherapistStudentFormKeys;
    type: 'input' | 'date' | 'radio';
    options?: string[];
};

export const inputFields: InputFieldType[] = [
    { label: 'Name of Child', name: SpeechTherapistStudentFormKeys.NAME, type: 'input' },
    { label: 'Age', name: SpeechTherapistStudentFormKeys.AGE, type: 'date' },
    { label: 'Gender', name: SpeechTherapistStudentFormKeys.GENDER, type: 'input' },
    { label: 'Date of Evaluation', name: SpeechTherapistStudentFormKeys.DOB, type: 'date' },

    {
        label: 'Primary Concern',
        name: SpeechTherapistStudentFormKeys.PRIMARY_CONCERN,
        type: 'radio',
        options: ['Speech Delay', 'Social Communication', 'Attention', 'Behavioral'],
    },

    {
        label: 'Languages at Home / Exposure',
        name: SpeechTherapistStudentFormKeys.LANGUAGES_AT_HOME,
        type: 'input',
    },

    {
        label: 'Diagnosis (if any)',
        name: SpeechTherapistStudentFormKeys.DIAGNOSIS_ANY,
        type: 'radio',
        options: ['ASD', 'ADHD', 'GOD', 'Suspected', 'Other'],
    },
];

export const INITIAL_STATE: SpeechTherapistStudentFormType = {
    [SpeechTherapistStudentFormKeys.STUDENT_ID]: '',
    [SpeechTherapistStudentFormKeys.NAME]: '',
    [SpeechTherapistStudentFormKeys.GENDER]: '',
    [SpeechTherapistStudentFormKeys.DIAGNOSIS]: '',
    [SpeechTherapistStudentFormKeys.PRIMARY_CONCERN]: '',
    [SpeechTherapistStudentFormKeys.LANGUAGES_AT_HOME]: '',
    [SpeechTherapistStudentFormKeys.DIAGNOSIS_ANY]: '',
    [SpeechTherapistStudentFormKeys.DOB]: null,
    [SpeechTherapistStudentFormKeys.AGE]: null,

    diagnosisOther: '',
};
