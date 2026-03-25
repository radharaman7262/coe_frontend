import { ClinicalImpressionFormKeys, ClinicalImpressionFormType } from './type';

export const INITIAL_STATE: ClinicalImpressionFormType = {
    [ClinicalImpressionFormKeys.BASED_ON_SPEECH_SAMPLE]: '',
    [ClinicalImpressionFormKeys.FLUENCY_DISORDER_IMPACT]: '',
};

export const FLUENCY_DIAGNOSIS_OPTIONS = [
    {
        label: 'Developmental stuttering',
        value: 'Developmental stuttering',
        key: 'developmental_stuttering',
    },
    {
        label: 'Cluttering',
        value: 'Cluttering',
        key: 'cluttering',
    },
    {
        label: 'Co-occurring disorder suspected',
        value: 'Co-occurring disorder suspected',
        key: 'co_occurring_disorder',
    },
    {
        label: 'Normal non-fluency for age',
        value: 'Normal non-fluency for age',
        key: 'normal_non_fluency',
    },
];

export const FLUENCY_IMPACT_OPTIONS = [
    {
        label: 'Academic functioning',
        value: 'Academic functioning',
        key: 'academic_functioning',
    },
    {
        label: 'Peer interaction',
        value: 'Peer interaction',
        key: 'peer_interaction',
    },
    {
        label: 'Emotional well-being',
        value: 'Emotional well-being',
        key: 'emotional_wellbeing',
    },
];