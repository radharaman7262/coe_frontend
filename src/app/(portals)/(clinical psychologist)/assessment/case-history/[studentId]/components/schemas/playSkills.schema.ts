import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { OPTIONS } from '../PlaySkills/constant';

import { PlaySkillFormKeys } from '../PlaySkills/type';

export const PLAY_SKILLS_SCHEMA: FormSchemaField<PlaySkillFormKeys>[] = [
    {
        name: PlaySkillFormKeys.GENERAL,
        type: 'checkbox',
        label: 'Social Skills',
        options: OPTIONS,
    },
    {
        name: PlaySkillFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
