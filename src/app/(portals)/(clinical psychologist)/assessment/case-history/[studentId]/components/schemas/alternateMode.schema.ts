import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { AlternateModesFormKeys } from '../AacAndAlternateModes/type';

export const ALTERNATE_MODE_SCHEMA: FormSchemaField<AlternateModesFormKeys>[] = [
    {
        name: AlternateModesFormKeys.AAC_TRIAL,
        label: 'AAC trial',
        type: 'radio',
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },
    {
        name: AlternateModesFormKeys.TYPE,
        label: 'Type',
        type: 'radio', // or 'date' if supported
        options: [
            { label: 'PECS', value: 'PECS' },
            { label: 'Low-tech board ', value: 'Low-tech board ' },
            { label: 'Eye gaze', value: 'Eye gaze' },
            { label: 'High-tech device', value: 'High-tech device' },
        ],
    },

    // 🔹 Surgical interventions (grouped fields)
    {
        name: AlternateModesFormKeys.ACCEPTANCE_PREFERENCE,
        label: 'Acceptance / Preference',
        type: 'text',
       placeholder:'Enter here'
    },
    {
        name: AlternateModesFormKeys.COMMUNICATIVE_INTENT,
        label: 'Communicative intent through AAC:',
        type: 'radio',
        options: [
            { label: 'Consistent', value: 'Consistent' },
            { label: 'Inconsistent', value: 'Inconsistent' }
        ],
    },
];
