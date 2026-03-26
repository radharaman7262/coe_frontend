import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DevelopmentalHistoryFormKeys } from '../GrossMotorDevelopment/type';

export const DEVELOPMENTAL_GROSS_MOTOR_SCHEMA: FormSchemaField<DevelopmentalHistoryFormKeys>[] = [
    {
        name: DevelopmentalHistoryFormKeys.NECK_HOLDING,
        label: 'Neck Holding',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        required: true,
        helperText: 'Expected at 3 months',
        options: [],
    },
    {
        name: DevelopmentalHistoryFormKeys.STANDS_ALONE,
        label: 'Stands Alone',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        required: true,
        helperText: 'Expected at 9 months',
        options: [],
    },
    {
        name: DevelopmentalHistoryFormKeys.WALKS_ALONE,
        label: 'Walks Alone',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        required: true,
        helperText: 'Expected at 15 months',
        options: [],
    },
    {
        name: DevelopmentalHistoryFormKeys.RUNS_WALKS_UP_DOWN,
        label: 'Runs/Walks up and down',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        required: true,
        helperText: 'Expected at 2 years',
        options: [],
    },
    {
        name: DevelopmentalHistoryFormKeys.RIDES_TRICYCLE,
        label: 'Rides a Tricycle',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        required: true,
        helperText: 'Expected at 3 years',
        options: [],
    },
];
