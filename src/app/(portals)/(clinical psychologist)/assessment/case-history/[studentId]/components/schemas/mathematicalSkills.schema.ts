import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { MathematicalSkillsFormKeys } from '../MathematicalSkills/type';

export const MATHEMATICAL_SKILLS_SCHEMA: FormSchemaField<MathematicalSkillsFormKeys>[] = [
    {
        name: MathematicalSkillsFormKeys.SCORES,
        label: 'Mathematical Skills',
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
                section: 'Mathematical Skills',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'recognizesNumbers',
                        label: 'Recognizes numbers according to grade level.',
                    },
                    {
                        key: 'moreLessConcept',
                        label: 'Shows understanding of "more" and "less" using objects.',
                    },
                    {
                        key: 'oneToOneCorrespondence',
                        label: 'Counts objects with one-to-one correspondence.',
                    },
                    {
                        key: 'beforeAfterNumbers',
                        label: 'Identifies what comes before and after a number.',
                    },
                    {
                        key: 'compareNumbers',
                        label: 'Compares two numbers (greater than, less than, equal to).',
                    },
                    {
                        key: 'writesNumbers',
                        label: 'Writes number names up to grade level.',
                    },
                    {
                        key: 'bigSmallHeavyLight',
                        label: 'Distinguishes between big/small, heavy/light.',
                    },
                    {
                        key: 'identifiesShapes',
                        label: 'Identifies basic shapes (circle, square, triangle, rectangle, etc.).',
                    },
                    {
                        key: 'sortsObjects',
                        label: 'Sorts objects by color, shape, or size.',
                    },
                    {
                        key: 'singleDigitAddition',
                        label: 'Solves single-digit addition problems.',
                    },
                    {
                        key: 'singleDigitSubtraction',
                        label: 'Solves single-digit subtraction problems.',
                    },
                    {
                        key: 'singleDigitMultiplication',
                        label: 'Solves single-digit multiplication problems.',
                    },
                    {
                        key: 'singleDigitDivision',
                        label: 'Solves single-digit division problems.',
                    },
                    {
                        key: 'multiDigitAdditionNoCarry',
                        label: 'Solves multi-digit addition problems without regrouping.',
                    },
                    {
                        key: 'multiDigitAdditionCarry',
                        label: 'Solves multi-digit addition problems with regrouping.',
                    },
                    {
                        key: 'multiDigitSubtractionNoBorrow',
                        label: 'Solves multi-digit subtraction problems without regrouping.',
                    },
                    {
                        key: 'multiDigitSubtractionBorrow',
                        label: 'Solves multi-digit subtraction problems with regrouping.',
                    },
                    {
                        key: 'multiDigitMultiplication',
                        label: 'Solves multi-digit multiplication problems.',
                    },
                    {
                        key: 'multiDigitDivision',
                        label: 'Solves multi-digit division problems.',
                    },
                    {
                        key: 'wordProblems',
                        label: 'Solves simple word problems.',
                    },
                    {
                        key: 'readsTime',
                        label: 'Reads and tells time (analog/digital).',
                    },
                ],
            },
        ],
    },
];
