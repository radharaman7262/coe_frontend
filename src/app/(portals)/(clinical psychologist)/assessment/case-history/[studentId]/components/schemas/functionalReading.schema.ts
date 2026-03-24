import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { FunctionalReadingFormKeys } from '../FunctionalReading/type';

export const FUNCTIONAL_READING_SCHEMA: FormSchemaField<FunctionalReadingFormKeys>[] = [
    {
        name: FunctionalReadingFormKeys.SCORES,
        label: '',
        type: 'table',

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
                section: 'Functional Reading',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'scribbles',
                        label: 'Scribbles',
                    },
                    {
                        key: 'fillsColor',
                        label: 'Fills color within a given diagram.',
                    },
                    {
                        key: 'tracesCurvedPatterns',
                        label: 'Traces curved patterns.',
                    },
                    {
                        key: 'tracesDottedPatterns',
                        label: 'Traces dotted-line patterns (e.g., zigzag).',
                    },
                    {
                        key: 'copiesShapes',
                        label: 'Copies simple shapes (square, triangle, rectangle, circle).',
                    },
                    {
                        key: 'tracesAlphabets',
                        label: 'Traces alphabets.',
                    },
                    {
                        key: 'writesAlphabets',
                        label: 'Writes alphabets independently.',
                    },
                    {
                        key: 'writesSentences',
                        label: 'Writes simple sentences.',
                    },
                    {
                        key: 'spacingBetweenWords',
                        label: 'Maintains consistent spacing between words.',
                    },
                ],
            },
        ],
    },
];
