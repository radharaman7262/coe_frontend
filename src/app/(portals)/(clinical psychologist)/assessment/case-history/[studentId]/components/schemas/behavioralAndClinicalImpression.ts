import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { VoiceBehavioralObservationFormKeys } from '../BehavioralAndClinicalImpression/type';

import { NON_VERBAL_SIGNS_OPTIONS } from '../BehavioralAndClinicalImpression/constant';

export const VOICE_BEHAVIORAL_OBSERVATION_SCHEMA: FormSchemaField<VoiceBehavioralObservationFormKeys>[] =
    [
        {
            name: VoiceBehavioralObservationFormKeys.ATTENTION,
            label: 'Attention / Compliance',
            type: 'radio',
            options: [
                { label: 'Good', value: 'good' },
                { label: 'Variable', value: 'variable' },
                { label: 'Needs prompting', value: 'needs_prompting' },
            ],
        },
        {
            name: VoiceBehavioralObservationFormKeys.EYE_CONTACT,
            label: 'Eye contact',
            type: 'radio',
            options: [
                { label: 'Appropriate', value: 'appropriate' },
                { label: 'Fleeting', value: 'fleeting' },
                { label: 'Avoidant', value: 'avoidant' },
            ],
        },
        {
            name: VoiceBehavioralObservationFormKeys.VOCAL_EFFORT,
            label: 'Vocal effort',
            type: 'radio',
            options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Strained', value: 'strained' },
                { label: 'Fatigued', value: 'fatigued' },
            ],
        },

        // 👇 checkbox group row
        {
            name: VoiceBehavioralObservationFormKeys.NON_VERBAL_SIGNS,
            label: 'Non-verbal signs',
            type: 'checkbox',
            options: NON_VERBAL_SIGNS_OPTIONS,
        },

        {
            name: VoiceBehavioralObservationFormKeys.PARENT_PERCEPTION,
            label: "Parent's perception",
            type: 'radio',
            options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Abnormal', value: 'abnormal' },
                { label: 'Socially noticeable', value: 'socially_noticeable' },
            ],
        },

        {
            name: VoiceBehavioralObservationFormKeys.SPEAKING_SITUATION,
            label: 'Speaking situations',
            type: 'radio',
            options: [
                { label: 'Comfort in structured', value: 'structured' },
                { label: 'Unstructured tasks', value: 'unstructured' },
            ],
        },
    ];
