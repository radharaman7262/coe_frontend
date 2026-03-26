import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DevelopmentalLanguageFormKeys } from '../LanguageDevelopment/type';

export const DEVELOPMENT_LANGUAGE_SCHEMA: FormSchemaField<DevelopmentalLanguageFormKeys>[] = [
    {
        name: DevelopmentalLanguageFormKeys.BABBLING,
        label: 'Babbling',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 6 months',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalLanguageFormKeys.DISYLLABLES,
        label: 'Disyllables',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 9 months',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalLanguageFormKeys.TWO_THREE_WORD_SENTENCES,
        label: '2-3 word sentences',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 2 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalLanguageFormKeys.KNOWS_FULL_NAME_GENDER,
        label: 'Knows full name and Gender',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 3 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalLanguageFormKeys.TELLS_STORY_POEM,
        label: 'Tells a story/poem',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 4 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalLanguageFormKeys.ASK_MEANING_OF_WORDS,
        label: 'Ask meaning of words',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 5 years',
        required: true,
        options: [],
    },
];
