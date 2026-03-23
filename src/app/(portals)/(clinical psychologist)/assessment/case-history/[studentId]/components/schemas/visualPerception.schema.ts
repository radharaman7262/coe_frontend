import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { VisualPerceptionFormKeys } from '../VisualPerception/type';

export const VISUAL_PERCEPTION_SCHEMA: FormSchemaField<VisualPerceptionFormKeys>[] = [
    {
        name: VisualPerceptionFormKeys.SCORES,
        label: '',
        type: 'table',

        // meta: {
        //     scoringCriteria:
        //         '0-Not Applicable, 1-Dependent, 2-Physical Prompt, 3-Verbal Prompt, 4-Cue, 5-Independent',
        // },

        columns: [
            { key: 'label', label: '' },
            {
                key: 'score',
                label: '',
                type: 'select',
                options: [
                    { label: '0 - Not Applicable', value: '0' },
                    { label: '1 - Dependent', value: '1' },
                    { label: '2 - Physical Prompt', value: '2' },
                    { label: '3 - Verbal Prompt', value: '3' },
                    { label: '4 - Cue', value: '4' },
                    { label: '5 - Independent', value: '5' },
                ],
            },
        ],

        rows: [
            {
                section: 'Visual Perception',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'tracksMovingObjects',
                        label: 'Tracks moving objects with eyes.',
                    },
                    {
                        key: 'matchesObjects',
                        label: 'Matches identical objects, shapes, colors, or symbols.',
                    },
                    {
                        key: 'identifiesSameDifferent',
                        label: 'Identifies same vs. different (shapes, colors, letters).',
                    },
                    {
                        key: 'identifiesDetails',
                        label: 'Identifies details in a picture.',
                    },
                    {
                        key: 'copiesPatterns',
                        label: 'Copies patterns in the correct sequence.',
                    },
                    {
                        key: 'completesMazes',
                        label: 'Completes mazes or dot-to-dot activities.',
                    },
                    {
                        key: 'leftRightDirection',
                        label: 'Identifies directions: left/right.',
                    },
                    {
                        key: 'upDownDirection',
                        label: 'Identifies directions: up/down.',
                    },
                ],
            },
        ],
    },
];