import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DevelopmentalFineMotorHistoryFormKeys } from '../DevelopmentalFineMotor/type';

export const DEVELOPMENTAL_FINE_MOTOR_SCHEMA: FormSchemaField<DevelopmentalFineMotorHistoryFormKeys>[] =
    [
        {
            name: DevelopmentalFineMotorHistoryFormKeys.MATURE_PINCER_GRASP,
            label: 'Mature Pincer grasp',
            type: 'text',
            placeholder: 'e.g. 2 months / 2 years',
            required: true,
            // helperText: 'Expected at 1 year',
            options: [],
        },
        {
            name: DevelopmentalFineMotorHistoryFormKeys.SCRIBBLES,
            label: 'Scribbles',
            type: 'text',
            placeholder: 'e.g. 2 months / 2 years',
            required: true,
            // helperText: 'Expected at 1.5 years',
            options: [],
        },
        {
            name: DevelopmentalFineMotorHistoryFormKeys.COPIES_A_CIRCLE,
            label: 'Copies a Circle',
            type: 'text',
            placeholder: 'e.g. 2 months / 2 years',
            required: true,
            // helperText: 'Expected at 3 years',
            options: [],
        },
        {
            name: DevelopmentalFineMotorHistoryFormKeys.IDENTIFIES_BODY_PARTS,
            label: 'Identifies body parts',
            type: 'text',
            placeholder: 'e.g. 2 months / 2 years',
            required: true,
            // helperText: 'Expected at 4 years',
            options: [],
        },
        {
            name: DevelopmentalFineMotorHistoryFormKeys.KNOWS_ADDRESS_RULES_OF_GAMES,
            label: 'Tells address / Knows rules of games',
            type: 'text',
            placeholder: 'e.g. 2 months / 2 years',
            required: true,
            // helperText: 'Expected at 4 years',
            options: [],
        },
    ];
