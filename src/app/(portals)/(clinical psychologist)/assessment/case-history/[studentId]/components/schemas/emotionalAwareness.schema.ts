import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

export const EMOTIONAL_AWARENESS_SCHEMA: FormSchemaField<'emotionalAwareness'>[] = [
    {
        name: 'emotionalAwareness',
        type: 'table',
        label: '',
        columns: [
            {
                key: 'label',
                label: 'Behavior/Skill',
            },
            {
                key: 'observed',
                label: 'Observed (Yes/No)',
                type: 'select',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                ],
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],
        rows: [
            {
                section: 'Emotional Awareness',
                sectionKey: 'behaviors',
                items: [
                    {
                        key: 'recognizesSelfEmotions',
                        label: 'Recognizes basic emotions in self (happy, sad, angry, scared)',
                    },
                    {
                        key: 'recognizesOthersEmotions',
                        label: 'Recognizes basic emotions in others',
                    },
                    {
                        key: 'expressesEmotions',
                        label: 'Expresses emotions verbally or non-verbally',
                    },
                    {
                        key: 'labelsOwnEmotions',
                        label: 'Labels own emotions appropriately',
                    },
                    {
                        key: 'usesGestures',
                        label: 'Uses gestures/facial expressions to show emotions',
                    },
                    {
                        key: 'emotionalContagion',
                        label: 'Demonstrates emotional contagion (mirrors others’ emotions)',
                    },
                ],
            },
        ],
    },
];
