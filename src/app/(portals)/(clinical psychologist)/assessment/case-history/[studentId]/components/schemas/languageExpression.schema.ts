import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { LanguageExpressionFormKeys } from '../LanguageExpressive/type';

export const LANGUAGE_EXPRESSIVE_SCHEMA: FormSchemaField<LanguageExpressionFormKeys>[] = [
    {
        name: LanguageExpressionFormKeys.SCORES,
        label: 'Language (Expressive)',
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
                section: 'Language (Expressive)',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'imitatesSounds',
                        label:
                            'Imitates sounds (e.g., teacher says "ba, ba" or "moo," and repeats it).',
                    },
                    {
                        key: 'imitatesGestures',
                        label: 'Imitates gestures.',
                    },
                    {
                        key: 'answersYesNo',
                        label: 'Answers yes/no questions.',
                    },
                    {
                        key: 'namesObjects',
                        label: 'Names familiar objects, people, and places.',
                    },
                    {
                        key: 'singleWords',
                        label: 'Uses single words to respond.',
                    },
                    {
                        key: 'retellsEvents',
                        label: 'Retells simple events or stories.',
                    },
                    {
                        key: 'asksQuestions',
                        label: 'Asks simple questions.',
                    },
                    {
                        key: 'expressesNeeds',
                        label: 'Expresses needs (e.g., "I need water").',
                    },
                ],
            },
        ],
    },
];