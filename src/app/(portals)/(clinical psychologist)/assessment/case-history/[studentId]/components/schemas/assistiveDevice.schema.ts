import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { AssisstiveDeviceFormKeys } from '../AssisstiveDevice/type';

import { OPTIONS } from '../AssisstiveDevice/constant';

export const ASSISTIVE_DEVICES_SCHEMA: FormSchemaField<AssisstiveDeviceFormKeys>[] = [
    {
        name: AssisstiveDeviceFormKeys.GENERAL,
        type: 'checkbox',
        label: 'Assistive Devices / Supports',
        options: OPTIONS,
    },
    {
        name: AssisstiveDeviceFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
