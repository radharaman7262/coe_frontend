import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';

import { RecommendationFormKeys } from '../Recommendation/type';

export const RECOMMENDATION_SCHEMA: FormSchemaField<RecommendationFormKeys>[] = [
    {
        name: RecommendationFormKeys.THERAPY,
        label: 'Therapies',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Speech therapy for articulation / resonance', value: 'Speech therapy for articulation / resonance      ' },
            { label: 'Focus on oral airflow, pressure consonants', value: 'Focus on oral airflow, pressure consonants' },
            { label: 'Nasality monitoring exercises', value: 'Nasality monitoring exercises' },
            { label: 'ENT / Audiology referral (if not done recently)', value: 'ENT / Audiology referral (if not done recently)' },
            { label: 'Dental / orthodontic consult', value: 'Dental / orthodontic consult' },
            { label: 'Parent training for home practice', value: 'Parent training for home practice' },
            { label: 'Multidisciplinary cleft team follow-up', value: 'Multidisciplinary cleft team follow-up' },
        ],
    },

    {
        name: RecommendationFormKeys.THERAPY_FREQUENCY,
        label: 'Nasometry (if done)',
        type: 'text',
        placeholder:'eg. 2 sessions/week',
        required: true,
        options: [],
    },
];
