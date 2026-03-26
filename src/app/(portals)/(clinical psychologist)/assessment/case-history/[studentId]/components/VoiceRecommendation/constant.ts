import { VoiceRecommendationFormType, VoiceRecommendationSchemaFormKeys } from './type';

export const INITIAL_STATE: VoiceRecommendationFormType = {
    [VoiceRecommendationSchemaFormKeys.THERAPIES]: '',
};

export const VOICE_THERAPY_OPTIONS = [
    {
        key: 'voiceTherapy',
        label: 'Voice therapy (Techniques: vocal hygiene, relaxation, breath coordination)',
        value: 'Voice therapy (Techniques: vocal hygiene, relaxation, breath coordination)',
    },
    {
        key: 'entReferral',
        label: 'ENT referral for laryngeal visualization',
        value: 'ENT referral for laryngeal visualization',
    },
    {
        key: 'audiologicalReferral',
        label: 'Audiological referral (if not recently done)',
        value: 'Audiological referral (if not recently done)',
    },
    {
        key: 'parentCounseling',
        label: 'Parent counseling for vocal hygiene & modeling',
        value: 'Parent counseling for vocal hygiene & modeling',
    },
    {
        key: 'avoidShouting',
        label: 'Avoid shouting/mimicking / educate school staff',
        value: 'Avoid shouting/mimicking / educate school staff',
    },
    {
        key: 'groupTherapy',
        label: 'Group therapy if social anxiety present',
        value: 'Group therapy if social anxiety present',
    },
    {
        key: 'reassessment',
        label: 'Re-assessment after medical management (if applicable)',
        value: 'Re-assessment after medical management (if applicable)',
    },
];
