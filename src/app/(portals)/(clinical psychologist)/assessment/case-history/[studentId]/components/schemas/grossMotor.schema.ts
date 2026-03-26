import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { GrossMotorFormKeys } from '../GrossMotor/type';

import { OPTIONS } from '../GrossMotor/constant';

export const GROSS_MOTOR_SCHEMA: FormSchemaField<GrossMotorFormKeys>[] = [
    {
        name: GrossMotorFormKeys.GROSS_MOTOR_SKILLS,
        label: 'Select Options*',
        helperText: 'multiple Selection',
        type: 'checkbox',
        required: true,
        // minSelection: 1,
        options: OPTIONS,
    },
];
