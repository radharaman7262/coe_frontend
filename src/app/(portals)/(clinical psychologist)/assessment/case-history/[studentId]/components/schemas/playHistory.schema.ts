import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { PlayHistoryFormKeys } from '../PlayHistory/type';

export const PLAY_HISTORY_SCHEMA: FormSchemaField<PlayHistoryFormKeys>[] = [
    {
        name: PlayHistoryFormKeys.PLAY_BEHAVIOUR,
        label: 'Play behaviour',
        type: 'radio',
        required: true,
        options: [
            { label: 'Enjoys to play', value: 'Enjoys to play' },
            { label: 'Not interested in play', value: 'Not interested in play' },
            { label: 'Observes others while playing', value: 'Observes others while playing' },
            { label: 'Other', value: 'Other' },
        ],
    },

    {
        name: PlayHistoryFormKeys.PLAY_PREFERENCE,
        label: 'Play preference',
        type: 'radio',
        required: true,
        options: [
            { label: 'No company', value: 'No company' },
            {
                label: 'Siblings or peer group not interested in playing with the child',
                value: 'Siblings or peer group not interested in playing with the child',
            },
            { label: 'Quarrelsome', value: 'Quarrelsome' },
            { label: 'Overprotected by caretakers', value: 'Overprotected by caretakers' },
            { label: 'Poor play facilities', value: 'Poor play facilities' },
            { label: 'Other', value: 'Other' },
        ],
    },

    {
        name: PlayHistoryFormKeys.KNOWLEDGE_OF_RULE_BASED_GAMES,
        label: 'Knowledge of games governed by rules',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: PlayHistoryFormKeys.BEHAVIOUR_IN_GROUP_PLAY,
        label: 'Behaviour while playing in group',
        type: 'radio',
        required: true,
        options: [
            { label: 'Cooperative', value: 'Cooperative' },
            { label: 'Withdrawn', value: 'Withdrawn' },
            {
                label: 'Aggressive or disruptive behavior',
                value: 'Aggressive or disruptive behavior',
            },
        ],
    },

    {
        name: PlayHistoryFormKeys.SPECIAL_LIKES_DISLIKES,
        label: 'Special Likes & Dislikes',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },
];
