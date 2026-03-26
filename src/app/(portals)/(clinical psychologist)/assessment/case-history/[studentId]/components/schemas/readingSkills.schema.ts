import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { ReadingSkillsFormKeys } from '../ReadingSkills/type';

export const READING_SKILLS_SCHEMA: FormSchemaField<ReadingSkillsFormKeys>[] = [
    {
        name: ReadingSkillsFormKeys.SCORES,
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
                section: 'Reading Skills',
                sectionKey: 'scores',
                items: [
                    {
                        key: 'recognizesUppercase',
                        label: 'Recognizes uppercase letters.',
                    },
                    {
                        key: 'recognizesLowercase',
                        label: 'Recognizes lowercase letters.',
                    },
                    {
                        key: 'matchesCase',
                        label: 'Matches upper- and lowercase letters.',
                    },
                    {
                        key: 'letterSoundCorrespondence',
                        label: 'Knows letter-sound correspondence.',
                    },
                    {
                        key: 'recognizesRhyming',
                        label: 'Recognizes rhyming words.',
                    },
                    {
                        key: 'phonemicAwareness',
                        label: 'Phonemic Awareness.',
                    },
                    {
                        key: 'blendsSounds',
                        label: 'Blends sounds to form words (e.g c-a-t → cat).',
                    },
                    {
                        key: 'segmentsSounds',
                        label: 'Segments words into sounds (e.g cat → c-a-t).',
                    },
                    {
                        key: 'manipulatesSounds',
                        label: 'Changes a sound to make a new word (e.g cat → hat).',
                    },
                    {
                        key: 'spellingSkills',
                        label: 'Spelling Skills.',
                    },
                    {
                        key: 'readsCvcWords',
                        label: 'Can read CVC words.',
                    },
                    {
                        key: 'readsBlends',
                        label: 'Can read blends.',
                    },
                    {
                        key: 'readsDigraphs',
                        label: 'Can read digraphs.',
                    },
                    {
                        key: 'readsSightWords',
                        label: 'Can read sight words.',
                    },
                    {
                        key: 'readsShortSentences',
                        label: 'Can read short phrases and simple sentences.',
                    },
                    {
                        key: 'readsParagraphs',
                        label: 'Can read short grade-level passages.',
                    },
                ],
            },
        ],
    },
];
