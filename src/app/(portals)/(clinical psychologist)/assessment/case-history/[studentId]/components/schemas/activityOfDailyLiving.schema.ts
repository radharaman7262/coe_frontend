import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ActivityOfDailyLivingFormKeys } from '../ActivityOfDailyLiving/type';

import { OPTIONS } from '../ActivityOfDailyLiving/constant';

export const ADL_SCHEMA: FormSchemaField<ActivityOfDailyLivingFormKeys>[] = [
    {
        name: ActivityOfDailyLivingFormKeys.GENERAL,
        type: 'checkbox',
        label: 'Activities of Daily Living',
        options: OPTIONS,
    },
    {
        name: ActivityOfDailyLivingFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
