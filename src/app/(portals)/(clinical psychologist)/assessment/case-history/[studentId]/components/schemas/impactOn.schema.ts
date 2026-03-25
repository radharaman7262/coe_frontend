import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { EMOTIONAL_SOCIAL_IMPACT_OPTIONS } from '../ImpactOnFunctionalCommunication/constant';

import { ImpactOnCommunicationFormKeys } from '../ImpactOnFunctionalCommunication/type';

export const EMOTIONAL_RECOMMENDATION_SCHEMA: FormSchemaField<ImpactOnCommunicationFormKeys>[] = [
    {
        name: ImpactOnCommunicationFormKeys.EMOTIONAL_SOCIAL_IMPACT,
        label: 'Emotional / Social Impact',
        type: 'checkbox',
        required: true,
        options: EMOTIONAL_SOCIAL_IMPACT_OPTIONS,
    },
];
