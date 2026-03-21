import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { InHandManipulationFormKeys } from '../InHandManipulation/type';

export const IN_HAND_MANIPULATION_SCHEMA: FormSchemaField<InHandManipulationFormKeys>[] = [
    {
        name: InHandManipulationFormKeys.IN_HAND_MANIPULATION,
        label: '',
        type: 'table',
        columns: [
            { key: 'label', label: 'Skill Type & Category' },
            {
                key: 'status',
                label: 'Integrated / Retained',
                type: 'select',
                options: [
                    { label: 'Integrated', value: 'integrated' },
                    { label: 'Retained', value: 'retained' },
                    { label: 'Not Tested', value: 'not_tested' },
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
                section: 'In-Hand Manipulation',
                sectionKey: 'inHandManupulation',
                items: [
                    {
                        key: 'fingerToPalm',
                        label: 'Finger-to-Palm Translation',
                        // subLabel: 'Expected at (2 – 2.5 years)',
                    },
                    {
                        key: 'palmToFinger',
                        label: 'Palm-to-Finger Translation',
                        // subLabel: 'Expected at (3 – 3.5 years)',
                    },
                    {
                        key: 'withStabilization',
                        label: 'With Stabilization (Translation)',
                        // subLabel: 'Expected at (4 – 6 years)',
                    },
                    {
                        key: 'simpleShift',
                        label: 'Simple Shift (Shift)',
                        // subLabel: 'Expected at (3 – 3.5 years)',
                    },
                    {
                        key: 'complexShift',
                        label: 'Complex Shift (Shift)',
                        // subLabel: 'Expected at (5 – 6 years)',
                    },
                    {
                        key: 'lateralShift',
                        label: 'Lateral Shift (Shift)',
                        // subLabel: 'Expected at (4 – 5 years)',
                    },
                    {
                        key: 'simpleRotation',
                        label: 'Simple Rotation (Rotation)',
                        // subLabel: 'Expected at (2.5 – 3 years)',
                    },
                    {
                        key: 'complexRotation',
                        label: 'Complex Rotation (Rotation)',
                        // subLabel: 'Expected at (4 – 6 years)',
                    },
                    {
                        key: 'rotationWithStabilization',
                        label: 'Rotation with Stabilization (Rotation)',
                        // subLabel: 'Expected at (6 – 7 years)',
                    },
                ],
            },
        ],
    },
];
