import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { GSLSensoryFormKeys } from '../GSLSensoryProfile/type';

export const GSL_SENSORY_PROFILE_SCHEMA: FormSchemaField<GSLSensoryFormKeys>[] = [
    {
        name: GSLSensoryFormKeys.AUDITORY,
        label: 'Auditory',
        type: 'radio',
        options: [
            { label: 'Covers ears', value: 'covers_ears' },
            { label: 'Seeks loud', value: 'seeks_loud' },
            { label: 'Normal', value: 'normal' },
        ],
    },
    {
        name: GSLSensoryFormKeys.VISUAL,
        label: 'Visual',
        type: 'radio',
        options: [
            { label: 'Fixates', value: 'fixates' },
            { label: 'Scans', value: 'scans' },
            { label: 'Avoids', value: 'avoids' },
        ],
    },
    {
        name: GSLSensoryFormKeys.TACTILE,
        label: 'Tactile',
        type: 'radio',
        options: [
            { label: 'Avoids', value: 'avoids' },
            { label: 'Seeks', value: 'seeks' },
            { label: 'Neutral', value: 'neutral' },
        ],
    },

    // 👇 checkbox group row
    {
        name: GSLSensoryFormKeys.VESTIBULAR,
        label: 'Vestibular',
        type: 'radio',
        options: [
            { label: 'Seeks', value: 'seeks' },
            { label: 'Avoids motion', value: 'avoids_motion' },
        ],
    },

    {
        name: GSLSensoryFormKeys.ORAL_SENSORY,
        label: 'Oral Sensory',
        type: 'radio',
        options: [
            { label: 'Mouthing', value: 'mouthing' },
            { label: 'Chewing objects', value: 'chewing_objects' },
        ],
    },

    {
        name: GSLSensoryFormKeys.OVERSTIMULATION,
        label: 'Overstimulation',
        type: 'radio',
        options: [
            { label: 'Meltdowns', value: 'meltdowns' },
            { label: 'Withdrawal', value: 'withdrawal' },
            { label: 'WNL', value: 'wnl' },
        ],
    },
];
