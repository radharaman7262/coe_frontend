import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';
import { OPTIONS } from '../Recommendation/constant';

import { RecommendationFormKeys } from '../Recommendation/type';

export const RECOMMENDATION_SCHEMA: FormSchemaField<RecommendationFormKeys>[] = [
    {
        name: RecommendationFormKeys.THERAPY,
        label: 'Therapies',
        type: 'checkbox',
        required: true,
        options: OPTIONS,
    },

    {
        name: RecommendationFormKeys.THERAPY_FREQUENCY,
        label: 'Nasometry (if done)',
        type: 'text',
        placeholder: 'eg. 2 sessions/week',
        required: true,
        options: [],
    },
];
