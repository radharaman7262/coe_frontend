import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ResonanceAndVoiceFormKeys } from '../ResonanceAndVoice/type';

export const RESONANCE_AND_VOICE_SCHEMA: FormSchemaField<ResonanceAndVoiceFormKeys>[] = [
    {
        name: ResonanceAndVoiceFormKeys.TYPE_OF_REASON,
        label: 'Type of Resonance',
        type: 'checkbox',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Hypernasal', value: 'hypernasal' },
            { label: 'Hyponasal', value: 'hyponasal' },
            { label: 'Mixed', value: 'mixed' },
        ],
    },
    {
        name: ResonanceAndVoiceFormKeys.RESONANCE_CONSISTENCY,
        label: 'Resonance consistency',
        type: 'radio', // or 'date' if supported
        options: [
            { label: 'Consistent', value: 'consistent' },
            { label: 'Inconsistent', value: 'inconsistent' },
            { label: 'Contextual', value: 'contextual' },
        ],
    },

    // 🔹 Surgical interventions (grouped fields)
    {
        name: ResonanceAndVoiceFormKeys.VOICE_QUALITY,
        label: 'Voice quality',
        type: 'radio',
        options: [
            { label: 'Hoarse', value: 'hoarse' },
            { label: 'Breathy', value: 'breathy' },
            { label: 'Strained', value: 'strained' },
            { label: 'Normal', value: 'normal' },
        ],
    },
    {
        name: ResonanceAndVoiceFormKeys.PITCH,
        label: 'Pitch',
        type: 'radio',
        options: [
            { label: 'High', value: 'high' },
            { label: 'Low', value: 'low' },
            { label: 'Monotone', value: 'monotone' },
            { label: 'Normal', value: 'normal' },
        ],
    },
    {
        name: ResonanceAndVoiceFormKeys.LOUDNESS,
        label: 'Loudness',
        type: 'radio',
        options: [
            { label: 'Appropriate', value: 'appropriate' },
            { label: 'Reduced', value: 'reduced' },
            { label: 'Variable', value: 'variable' },
        ],
    },

    // 🔹 Hearing Status (checkbox group)
    {
        name: ResonanceAndVoiceFormKeys.NASAL_TURBULENCE,
        label: 'Nasal turbulence / Snorting',
        type: 'radio',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'No' },
        ],
    },
];
