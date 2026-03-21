import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SpeedAndAgilityFormKeys } from '../SpeedAndAgility/type';

export const SPEED_AND_AGILITY_SCHEMA: FormSchemaField<SpeedAndAgilityFormKeys>[] = [
    {
        name: SpeedAndAgilityFormKeys.DESCRIPTION,
        label: '',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
