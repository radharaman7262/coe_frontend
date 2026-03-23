import { MedicalDevelopmentalHistoryFormKeys, MedicalDevelopmentalHistoryFormType } from './type';

export const INITIAL_STATE: MedicalDevelopmentalHistoryFormType = {
    [MedicalDevelopmentalHistoryFormKeys.BIRTH_HISTORY]: '',
    [MedicalDevelopmentalHistoryFormKeys.COMORBIDITIES]: '',
    [MedicalDevelopmentalHistoryFormKeys.MEDICATIONS]: '',
    [MedicalDevelopmentalHistoryFormKeys.MOTOR_MILE_STONES]: '',
    [MedicalDevelopmentalHistoryFormKeys.PERINATAL_HISTORY]: '',
    [MedicalDevelopmentalHistoryFormKeys.SENSORY_PROFILE]: '',
};

export const OPTIONS = [
    { label: 'Seizures', value: 'Seizures', key: 'seizures' },
    { label: 'Vision', value: 'Vision', key: 'vision' },
    { label: 'Hearing', value: 'Hearing', key: 'hearing' },
    {
        label: 'Intellectual Disability',
        value: 'Intellectual Disability',
        key: 'intellectualDisability',
    },
];
