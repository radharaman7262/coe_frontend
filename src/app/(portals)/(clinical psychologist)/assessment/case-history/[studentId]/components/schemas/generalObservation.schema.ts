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
        helperInputText:
            '(Physical appearance, appropriate to age, body built & Size, dress, physical disabilities/impairments if any)',
    },

    {
        name: GeneralObservationFormKeys.SPONTANEOUS_MOBILITY_ACTIVITY,
        label: 'Spontaneous mobility & Activity level',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
        helperInputText: '(Retarted, Hyperkinetic, Quiet)',
    },

    {
        name: GeneralObservationFormKeys.SPEECH,
        label: 'Speech',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
        helperInputText: '(flow, level of development of speech etc.)',
    },

    {
        name: GeneralObservationFormKeys.AFFECTIVE_BEHAVIOR,
        label: 'Affective Behavior',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
        helperInputText:
            '(Any appearance of anxiety, fear, depression, shyness including child’s attitude towards the examiner)',
    },

    {
        name: GeneralObservationFormKeys.ATTENTION_SPAN_DISTRACTIBILITY,
        label: 'Attention Span and Distractibility',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
        helperInputText:
            '(Sustained, easily distracted, requires frequent redirection, age-appropriate, impulsive, fidgety, calm and focused)',
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
        helperInputText:
            '(child’s Knowledge of reasons for problems, desire for help, sense of own capacity for change)',
    },
];
