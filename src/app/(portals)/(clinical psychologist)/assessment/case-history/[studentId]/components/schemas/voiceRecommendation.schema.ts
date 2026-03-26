import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { VOICE_THERAPY_OPTIONS } from '../VoiceRecommendation/constant';

import { VoiceRecommendationSchemaFormKeys } from '../VoiceRecommendation/type';

export const VOICE_RECOMMENDATION_SCHEMA: FormSchemaField<VoiceRecommendationSchemaFormKeys>[] = [
    {
        name: VoiceRecommendationSchemaFormKeys.THERAPIES,
        type: 'checkbox',
        label: 'Therapies',
        options: VOICE_THERAPY_OPTIONS,
    },
];
