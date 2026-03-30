import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { FluencyInformalFormalFormKeys } from '../FluencyInformalFormalTools/type';

export const FLUENCY_INFORMAL_FORMAL_TOOL_SCHEMA: FormSchemaField<FluencyInformalFormalFormKeys>[] =
    [
        {
            name: FluencyInformalFormalFormKeys.SPEECH_SAMPLES_MULTIPLE_CONTEXTS,
            label: 'Speech samples in multiple contexts',
            type: 'text',
            required: true,
        },

        {
            name: FluencyInformalFormalFormKeys.SHUTTERING_SEVERITY_INSTRUMENT,
            label: 'Stuttering Severity Instrument',
            type: 'radio',
            required: true,
            options: [
                { label: 'SSI-4', value: 'SSI-4' },
                { label: 'TOCS', value: 'TOCS' },
                { label: 'Other', value: 'Other' },
            ],
        },

        {
            name: FluencyInformalFormalFormKeys.PARENT_TEACHER_RATING_SCALES,
            label: 'Parent and teacher rating scales (if applicable)',
            type: 'text',
        },

        {
            name: FluencyInformalFormalFormKeys.OBSERVATION_CHECKLISTS,
            label: 'X-ray Exposure',
            type: 'text',
            required: true,
        },
    ];
