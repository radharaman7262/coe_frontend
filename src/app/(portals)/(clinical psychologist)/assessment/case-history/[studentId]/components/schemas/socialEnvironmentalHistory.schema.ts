import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SocialEnvironmentalHistoryFormKeys } from '../SocialAndEnvironmentHistory/type';

export const SOCIAL_ENVIRONMENTAL_HISTORY: FormSchemaField<SocialEnvironmentalHistoryFormKeys>[] = [
    {
        name: SocialEnvironmentalHistoryFormKeys.PEER_RELATIONSHIPS,
        label: 'Peer relationships',
        type: 'radio',
        required: true,
        options: [
            { label: 'Isolated', value: 'Isolated' },
            { label: 'Passive', value: 'Passive' },
            { label: 'Engaged', value: 'Engaged' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.INTERACTION_WITH_ADULTS,
        label: 'Interaction with adults',
        type: 'radio',
        required: true,
        options: [
            { label: 'Fearful', value: 'Fearful' },
            { label: 'Avoidant', value: 'Avoidant' },
            { label: 'Engaged', value: 'Engaged' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.BEHAVIORAL_ISSUES,
        label: 'Behavioral issues',
        type: 'radio',
        required: true,
        options: [
            { label: 'Tantrums', value: 'Tantrums' },
            { label: 'Aggression', value: 'Aggression' },
            { label: 'Defiant', value: 'Defiant' },
            { label: 'Impulsive', value: 'Impulsive' },
            { label: 'None', value: 'None' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.INTERESTS_AND_HOBBIES,
        label: 'Interests and hobbies',
        type: 'radio',
        required: true,
        options: [
            { label: 'Disinterested', value: 'Disinterested' },
            { label: 'Passive', value: 'Passive' },
            { label: 'Curious', value: 'Curious' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.SLEEPING_HABITS,
        label: 'Sleeping habits',
        type: 'radio',
        required: true,
        options: [
            { label: 'Normal', value: 'Normal' },
            { label: 'Disturbed', value: 'Disturbed' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.SCREEN_TIME,
        label: 'Screen time',
        type: 'radio',
        required: true,
        options: [
            { label: 'None', value: 'None' },
            { label: 'Balanced', value: 'Balanced' },
            { label: 'Excessive', value: 'Excessive' },
        ],
    },

    {
        name: SocialEnvironmentalHistoryFormKeys.ADAPTABILITY_TO_CHANGES,
        label: 'Adaptability to changes',
        type: 'radio',
        required: true,
        options: [
            { label: 'Resistant', value: 'Resistant' },
            { label: 'Flexible', value: 'Flexible' },
        ],
    },
];
