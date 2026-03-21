import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { OPTIONS } from '../Behavior/constant';

import { BehaviorFormKeys } from '../Behavior/type';

export const BEHAVIOR_SCHEMA: FormSchemaField<BehaviorFormKeys>[] = [
    {
        name: BehaviorFormKeys.GENERAL,
        type: 'checkbox',
        label: 'Behavior',
        options: OPTIONS,
    },
    {
        name: BehaviorFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
