import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { FineMotorFormKeys } from '../FineMotorSkills/type';
import { OPTIONS } from '../FineMotorSkills/constant';

export const FINE_MOTOR_SCHEMA: FormSchemaField<FineMotorFormKeys>[] = [
    // 🔹 GENERAL (Checkbox - Multi Select)
    {
        name: FineMotorFormKeys.GENERAL,
        label: 'General',
        helperText: 'Multiple Choice',
        type: 'checkbox',
        options: OPTIONS,
        required: true,
    },

    // 🔹 HAND DOMINANCE (Radio)
    // {
    //     name: FineMotorFormKeys.HAND_DOMINANCE,
    //     label: 'Hand dominance (by 4–6 years)',
    //     type: 'radio',
    //     options: [
    //         { label: 'Right', value: 'right' },
    //         { label: 'Left', value: 'left' },
    //     ],
    // },

    // 🔹 COMMENTS (Text)
    {
        name: FineMotorFormKeys.COMMENTS,
        label: 'Comments',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
    },
];
