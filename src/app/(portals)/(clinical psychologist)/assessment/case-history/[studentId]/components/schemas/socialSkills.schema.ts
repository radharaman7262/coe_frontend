import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { OPTIONS } from '../SocialSkills/constant';

import { SocialSkillsFormKeys } from '../SocialSkills/type';

export const SOCIAL_SKILLS_SCHEMA: FormSchemaField<SocialSkillsFormKeys>[] = [
    {
        name: SocialSkillsFormKeys.GENERAL,
        type: 'checkbox',
        label: 'Social Skills',
        options: OPTIONS,
    },
    {
        name: SocialSkillsFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
