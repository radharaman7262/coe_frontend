import { MedicalHistoryFormKeys, MedicalHistoryFormType } from './type';

export const INITIAL_STATE: MedicalHistoryFormType = {
    [MedicalHistoryFormKeys.STUDENT_ID]: '',
    [MedicalHistoryFormKeys.CURRENT_OR_PAST_MEDICAL_CONDITIONS]: '',
    [MedicalHistoryFormKeys.ALLERGIES]: '',
    [MedicalHistoryFormKeys.MAJOR_ILLNESS]: '',
    [MedicalHistoryFormKeys.FREQUENT_INFECTIONS]: '',
    [MedicalHistoryFormKeys.PREVIOUS_TREATMENT]: '',
    [MedicalHistoryFormKeys.DIAGNOSED_DISABILITY]: '',
};

export const DIAGNOSIS_DISABILITY_OPTIONS = [
    { label: 'Autism', value: 'Autism', key: 'Autism' },
    { label: 'ADHD', value: 'ADHD', key: 'ADHD' },
    {
        label: 'Intellectual Disability',
        value: 'Intellectual Disability',
        key: 'IntellectualDisability',
    },
    { label: 'Cerebral Palsy', value: 'Cerebral Palsy', key: 'CerebralPalsy' },
    { label: 'Hearing Loss', value: 'Hearing Loss', key: 'HearingLoss' },
    { label: 'Others', value: 'Others', key: 'Others' },
];
