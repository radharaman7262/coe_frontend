import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SeverityRatingFormKeys } from '../SeverityRating/type';

export const SEVERITY_RATING_SCHEMA: FormSchemaField<SeverityRatingFormKeys>[] = [
    {
        name: SeverityRatingFormKeys.EMOTIONAL_SOCIAL_IMPACT,
        label: 'Emotional / Social Impact',
        type: 'radio',
        required: true,
        options: [
            { label: 'Mild', value: 'Mild' },
            { label: 'Moderate', value: 'Moderate' },
            { label: 'Severe', value: 'Severe' },
        ],
    },
    {
        name: SeverityRatingFormKeys.SLD,
        label: 'SLD (Stuttering-like Disfluencies)',
        type: 'text',
        placeholder:'Enter percentage'
    },
    {
        name: SeverityRatingFormKeys.NATURAL_OF_SPEECH,
        label: 'Naturalness of speech',
        type: 'radio',
        required: true,
        options: [
            { label: 'Natural', value: 'Natural' },
            { label: 'Somewhat unnatural  ', value: 'Somewhat unnatural  ' },
            { label: 'Unnatural', value: 'Unnatural' },
        ],
    },
        {
        name: SeverityRatingFormKeys.SPEECH_RATE,
        label: 'Speech rate',
        type: 'text',
        placeholder:'Enter syllables/minute'
    },
];
