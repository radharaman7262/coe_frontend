import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { GeneralObservationFormKeys } from '../GeneralObservation/type';

export const GENERAL_OBSERVATION_SCHEMA: FormSchemaField<GeneralObservationFormKeys>[] = [
    {
        name: GeneralObservationFormKeys.GENERAL_APPEARANCE_BEHAVIOUR,
        label: 'General Appearance and Behaviour',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.SPONTANEOUS_MOBILITY_ACTIVITY,
        label: 'Spontaneous mobility & Activity level',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.SPEECH,
        label: 'Speech',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.AFFECTIVE_BEHAVIOR,
        label: 'Affective Behavior',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.ATTENTION_SPAN_DISTRACTIBILITY,
        label: 'Attention Span and Distractibility',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.INTELLECTUAL_CAPACITY,
        label: 'Intellectual Capacity',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: GeneralObservationFormKeys.MOTIVATIONAL_INSIGHT,
        label: 'Motivational Insight',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },
];
