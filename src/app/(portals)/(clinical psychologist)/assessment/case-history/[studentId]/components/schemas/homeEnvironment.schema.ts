import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';

import { HomeEnvironmentFormKeys } from '../HomeEnvironment/type';

export const HOME_ENVIRONMENT_SCHEMA: FormSchemaField<HomeEnvironmentFormKeys>[] = [
    {
        name: HomeEnvironmentFormKeys.PATTERNS_OF_PARENTAL_FUNCTIONING,
        label: 'Patterns of parental functioning :',
        type: 'radio',
        required: true,
        options: [
            { label: 'Permissiveness', value: 'Permissiveness' },
            { label: 'rigidity', value: 'rigidity' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.CONSISTENCY,
        label: '',
        type: 'radio',
        required: true,
        options: [
            { label: 'Consistency', value: 'Consistency' },
            { label: 'Inconsistency', value: 'Inconsistency' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.DISCIPLINE,
        label: '',
        type: 'radio',
        required: true,
        options: [
            { label: 'Strictness of discipline', value: 'Strictness of discipline' },
            { label: 'liberal', value: 'liberal' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.APPROVAL,
        label: '',
        type: 'radio',
        required: true,
        options: [
            { label: 'Approval of Interests', value: 'Approval of Interests' },
            { label: 'Disapproval', value: 'Disapproval' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.PROTECTIVENESS,
        label: '',
        type: 'radio',
        required: true,
        options: [
            { label: 'Protectiveness', value: 'Protectiveness' },
            { label: 'Non Protectiveness', value: 'Non Protectiveness' },
            { label: 'Overprotection', value: 'Overprotection' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.DEVIANCE,
        label: '',
        type: 'radio',
        required: true,
        options: [
            { label: 'Tolerance of Deviance', value: 'Tolerance of Deviance' },
            { label: 'Non Tolerance', value: 'Non Tolerance' },
        ],
    },
    {
        name: HomeEnvironmentFormKeys.CHILD_EXPECTATIONS,
        label: 'Expectations from the child',
        type: 'text',
        required: true,
    },
    {
        name: HomeEnvironmentFormKeys.FAMILY_DYNAMICS,
        label: 'Patterns of Family Dynamics',
        type: 'text',
        required: true,
        helperInputText:
            '(child’s relationship with family members, interpersonal relationship among family members, Interaction pattern and family support system)',
    },
];

// options: [
//     { label: 'Any pressures', value: 'Any pressures' },
//     { label: 'Deprivation', value: 'Deprivation' },
// ],
