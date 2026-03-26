import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { LanguageReceiptFormKeys } from '../LanguageReceptive/type';

export const LANGUAGE_RECEPTIVE_SCHEMA: FormSchemaField<LanguageReceiptFormKeys>[] = [
    {
        name: LanguageReceiptFormKeys.SCORES,
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
                section: 'Language (Receptive)',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'respondsName',
                        label: 'Responds when their name is called.',
                    },
                    {
                        key: 'identifiesBodyParts',
                        label: 'Identifies body parts when asked.',
                    },
                    {
                        key: 'singleInstruction',
                        label: 'Follows a single instruction (e.g "Give me the ball").',
                    },
                    {
                        key: 'multiInstruction',
                        label: 'Follows multi-step instructions (e.g "Pick up the book and put it on the table").',
                    },
                    {
                        key: 'whatQuestions',
                        label: 'Responds to simple "what" questions.',
                    },
                    {
                        key: 'whereQuestions',
                        label: 'Responds to simple "where" questions.',
                    },
                    {
                        key: 'whoQuestions',
                        label: 'Responds to simple "who" questions.',
                    },
                    {
                        key: 'whyQuestions',
                        label: 'Responds to simple "why" questions.',
                    },
                    {
                        key: 'howQuestions',
                        label: 'Responds to simple "how" questions.',
                    },
                    {
                        key: 'concepts',
                        label: 'Responds to concepts such as big/small, in/out, under/over.',
                    },
                ],
            },
        ],
    },
];
