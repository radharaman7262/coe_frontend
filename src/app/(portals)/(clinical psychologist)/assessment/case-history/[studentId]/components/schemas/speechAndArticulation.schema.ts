import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SpeechAndArticulateFormKeys } from '../SpeechAndArticulation/type';

import { ARTICULATION_OPTIONS } from '../SpeechAndArticulation/constant';

export const SPEECH_ARTICULATION_SCHEMA: FormSchemaField<SpeechAndArticulateFormKeys>[] = [
    {
        name: SpeechAndArticulateFormKeys.SPEECH_INTELLIGIBILITY,
        label: 'Speech intelligibility',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: SpeechAndArticulateFormKeys.ARTICULATION_ERRORS,
        label: 'Articulation errors',
        type: 'checkbox', // or 'date' if supported
        options: ARTICULATION_OPTIONS,
    },

    // 🔹 Surgical interventions (grouped fields)
    {
        name: SpeechAndArticulateFormKeys.ERROR_SOUNDS,
        label: 'Specific error sounds',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: SpeechAndArticulateFormKeys.COMPENSATORY_ARTICULATION,
        label: 'Compensatory articulation patterns',
        type: 'radio',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'No' },
        ],
    },
    {
        name: SpeechAndArticulateFormKeys.NASAL_EMISSION,
        label: 'Nasal emission',
        type: 'radio',
        options:[
            { label: 'Audible', value: 'Audible' },
            { label: 'Inaudible', value: 'Inaudible' },
            { label: 'Absent', value: 'Absent' },
        ]
    },

    // 🔹 Hearing Status (checkbox group)
    {
        name: SpeechAndArticulateFormKeys.PRESSURE_CONSONANT,
        label: 'Pressure consonant production',
        type: 'radio',
        options: [
            { label: 'Present', value: 'Present' },
            { label: 'Weak', value: 'Weak' },
            { label: 'Absent', value: 'Absent' },
        ],
    },

    {
        name: SpeechAndArticulateFormKeys.ORAL_NASAL,
        label: 'Oral-nasal contrast testing',
        type: 'radio',
        options:[
            { label: 'Done ', value: 'Done' },
            { label: 'Not done-reactive', value: 'Not done-reactive' },
        ],
    }
];
