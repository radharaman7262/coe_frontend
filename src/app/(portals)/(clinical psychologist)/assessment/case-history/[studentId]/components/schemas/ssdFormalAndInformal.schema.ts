import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { PHONOLOGICAL_PROCESS } from '../SpeechAndPhonology/constant';

import { SSDFormalAndInformalFormKeys } from '../SSDFormalAndInformalTools/type';
import { FORMAL_TOOLS, SPEECH_SAMPLE_OPTIONS } from '../SSDFormalAndInformalTools/constant';

export const SSD_FORMAL_AND_INFORMAL_SCHEMA: FormSchemaField<SSDFormalAndInformalFormKeys>[] = [
    {
        name: SSDFormalAndInformalFormKeys.SPEECH_SAMPLE,
        label: 'Speech Intelligibility:',
        type: 'checkbox',
        required: true,
        options: SPEECH_SAMPLE_OPTIONS,
    },
    {
        name: SSDFormalAndInformalFormKeys.FORMAL_TOOL_USED,
        label: 'Formal tools (if used)',
        type: 'checkbox',
        required: true,
        options: FORMAL_TOOLS,
    },
    {
        name: SSDFormalAndInformalFormKeys.STIMULATION_CHECKED,
        label: 'Phonological Processes Observed',
        type: 'radio',
        required: true,
        options: PHONOLOGICAL_PROCESS,
    },
    {
        name: SSDFormalAndInformalFormKeys.ERROR_ANALYSIS_METHOD,
        label: 'Error analysis method',
        type: 'radio',
        required: true,
        options: [
            { key: 'phoneme-based', label: 'Phoneme-based', value: 'Phoneme-based' },
            { key: 'process-based', label: 'Process-based', value: 'Process-based' },
        ],
    },
];
