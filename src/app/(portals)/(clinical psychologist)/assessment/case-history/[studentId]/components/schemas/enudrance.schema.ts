import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { EnduranceFormKeys } from '../Endurance/type';

export const ENDURANCE_SCHEMA: FormSchemaField<EnduranceFormKeys>[] = [
    {
        name: EnduranceFormKeys.UPPER_LIMB,
        label: 'Upper Limb Endurance',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: EnduranceFormKeys.LOWER_LIMB,
        label: 'Lower Limb Endurance',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: EnduranceFormKeys.SITTING,
        label: 'Sitting Endurance',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: EnduranceFormKeys.STANDING,
        label: 'Standing Endurance',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: EnduranceFormKeys.ACTIVITY_SPECIFIC,
        label: 'Activity specific (Eg. Cycling, Jumping, Walking)',
        type: 'text',
        placeholder: 'Enter here',
    },
];
