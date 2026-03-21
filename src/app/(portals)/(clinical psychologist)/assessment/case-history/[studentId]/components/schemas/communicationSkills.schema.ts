import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { OPTIONS } from '../CommunicationSkills/constant';

import { CommunicationSkillsFormKeys } from '../CommunicationSkills/type';

export const COMMUNICATION_SKILLS_SCHEMA: FormSchemaField<CommunicationSkillsFormKeys>[] = [
    {
        name: CommunicationSkillsFormKeys.GENERAL,
        type: 'checkbox',
        label: 'General',
        options: OPTIONS,
    },
    {
        name: CommunicationSkillsFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
