import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';
import { FormalAndInformalFormKeys } from '../FormalAndInformalTools/type';

export const FORMAL_AND_INFORMAL_TOOL_SCHEMA: FormSchemaField<FormalAndInformalFormKeys>[] = [
    {
        name: FormalAndInformalFormKeys.SPEECH_SAMPLE,
        label: 'Speech sample',
        type: 'radio',
        required: true,
        options: [
            { label: 'Spontaneous ', value: 'Spontaneous' },
            { label: 'Repetition', value: 'Repetition' },
            { label: 'Syllable-level', value: 'Syllable-level' },
        ],
    },

    {
        name: FormalAndInformalFormKeys.NASOMETRY,
        label: 'Nasometry (if done)',
        type: 'text',
        required: true,
        options: [],
    },

    {
        name: FormalAndInformalFormKeys.MIRROR_SEE_SCAPE_CHECKS,
        label: 'Mirror / See-Scape / Stimulability checks',
        type: 'text',
        required: true,
        options: [],
    },
    {
        name: FormalAndInformalFormKeys.FORMAL_ARTICULATION_TOOLS,
        label: ' Formal articulation tools used (if any)',
        type: 'text',
        required: true,
        options: [],
    },
];
