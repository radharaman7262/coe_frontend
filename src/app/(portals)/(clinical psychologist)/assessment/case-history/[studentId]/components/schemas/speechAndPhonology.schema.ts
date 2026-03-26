import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SpeechAndPhonologyFormKeys } from '../SpeechAndPhonology/type';

import {
    CAS_INDICATORS_OPTIONS,
    MOTOR_SPEECH_MARKER_OPTIONS,
    PHONOLOGICAL_PROCESS,
} from '../SpeechAndPhonology/constant';

export const SPEECH_AND_PHONOLOGY_SCHEMA: FormSchemaField<SpeechAndPhonologyFormKeys>[] = [
    {
        name: SpeechAndPhonologyFormKeys.SPEECH,
        label: 'Speech Intelligibility:',
        type: 'text',
        required: true,
    },
    {
        name: SpeechAndPhonologyFormKeys.PHONEMES,
        label: 'Formal tools (if used)',
        type: 'text',
        required: true,
    },
    {
        name: SpeechAndPhonologyFormKeys.PHONOLOGICAL,
        label: 'Phonological Processes Observed',
        type: 'radio',
        required: true,
        options: PHONOLOGICAL_PROCESS,
    },
    {
        name: SpeechAndPhonologyFormKeys.CONSISTENCY,
        label: 'Error analysis method',
        type: 'radio',
        required: true,
        options: [
            { key: 'phoneme-based', label: 'Phoneme-based', value: 'Phoneme-based' },
            { key: 'process-based', label: 'Process-based', value: 'Process-based' },
        ],
    },
    {
        name: SpeechAndPhonologyFormKeys.MOTOR_SPEECH,
        label: 'Motor speech markers',
        type: 'checkbox',
        required: true,
        options: MOTOR_SPEECH_MARKER_OPTIONS,
    },
    {
        name: SpeechAndPhonologyFormKeys.CAS_INDICATORS,
        label: 'CAS indicators',
        type: 'checkbox',
        required: true,
        options: CAS_INDICATORS_OPTIONS,
    },
];
