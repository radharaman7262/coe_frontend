import { SSDDiagnosisImpressionFormKeys, SDDiagnosisImpressionFormType } from './type';

export const INITIAL_STATE: SDDiagnosisImpressionFormType = {
    [SSDDiagnosisImpressionFormKeys.COMMUNICATION_INTENT]: '',
    [SSDDiagnosisImpressionFormKeys.LANGUAGE_PROFILE]: '',
    [SSDDiagnosisImpressionFormKeys.SPEECH_DISORDER]: '',
};

export const SSD_DIAGNOSIS_IMPRESSION = [
    {
        key: 'articulation_disorder',
        label: 'Articulation disorder',
        value: 'Articulation disorder',
    },
    {
        key: 'phonological_disorder',
        label: 'Phonological disorder',
        value: 'Phonological disorder',
    },
    {
        key: 'childhood_apraxia',
        label: 'Childhood apraxia of speech',
        value: 'Childhood apraxia of speech',
    },
    { key: 'dysarthria', label: 'Dysarthria', value: 'Dysarthria' },
    {
        key: 'no_disorder – age-appropriate development',
        label: 'No disorder – age-appropriate development',
        value: 'No disorder – age-appropriate development',
    },
];

export const LANGUAGE_PROFILE_OPTIONS = [
    { key: 'age-appropriate', label: 'Age-appropriate', value: 'Age-appropriate' },
    { key: 'delayed', label: 'Delayed', value: 'Delayed' },
    { key: 'mixed profile', label: 'Mixed profile', value: 'Mixed profile' },
];

export const FUNCTIONAL_COMMUNICATION_OPTIONS = [
    { key: 'adequate', label: 'Adequate', value: 'Adequate' },
    { key: 'limited', label: 'Limited', value: 'Limited' },
    { key: 'aac-reliant', label: 'AAC-reliant', value: 'AAC-reliant' },
];
