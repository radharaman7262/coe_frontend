import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ImpulseControlFormKeys } from '../ImpulseControl/type';

export const IMPULSE_CONTROL_SCHEMA: FormSchemaField<ImpulseControlFormKeys>[] = [
    {
        name: ImpulseControlFormKeys.SUSTAINED_ATTENTION,
        type: 'radio',
        label: 'Sustained Attention',
        options: [
            { label: 'Short', value: 'short' },
            { label: 'Variable', value: 'variable' },
            { label: 'Prompted', value: 'prompted' },
        ],
    },
    {
        name: ImpulseControlFormKeys.TASK_INITIATION,
        type: 'radio',
        label: 'Task Initiation',
        options: [
            { label: 'Prompted', value: 'prompted' },
            { label: 'Independent', value: 'independent' },
        ],
    },
    {
        name: ImpulseControlFormKeys.TASK_SWITCHING,
        type: 'radio',
        label: 'Task Switching',
        options: [
            { label: 'Smooth', value: 'smooth' },
            { label: 'Needs cues', value: 'needs_cues' },
        ],
    },
    {
        name: ImpulseControlFormKeys.IMPULSIVITY,
        type: 'radio',
        label: 'Impulsivity',
        options: [
            { label: 'Waits turn', value: 'waits_turn' },
            { label: 'Interrupts', value: 'interrupts' },
            { label: 'Grabs', value: 'grabs' },
        ],
    },
    {
        name: ImpulseControlFormKeys.HYPER_ACTIVITY,
        type: 'radio',
        label: 'Hyperactivity',
        options: [
            { label: 'Low', value: 'low' },
            { label: 'Normal', value: 'normal' },
            { label: 'Excessive', value: 'excessive' },
        ],
    },
    {
        name: ImpulseControlFormKeys.RESPONSE_TO_INSTRUCTIONS,
        type: 'radio',
        label: 'Response to Instructions',
        options: [
            { label: 'Immediate', value: 'immediate' },
            { label: 'Needs repetition', value: 'needs_repetition' },
            { label: 'Non-compliant', value: 'non_compliant' },
        ],
    },
];
