import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SchoolReadinessFormKeys } from '../SchoolReadiness/type';

import { OPTIONS } from '../SchoolReadiness/constant';

export const SCHOOL_READINESS_SCHEMA: FormSchemaField<SchoolReadinessFormKeys>[] = [
    {
        name: SchoolReadinessFormKeys.GENERAL,
        type: 'checkbox',
        label: 'School Readiness / Classroom Behavior',
        options: OPTIONS,
    },
    {
        name: SchoolReadinessFormKeys.COMMENTS,
        type: 'text',
        label: 'Comments',
        placeholder: 'Enter here',
    },
];
