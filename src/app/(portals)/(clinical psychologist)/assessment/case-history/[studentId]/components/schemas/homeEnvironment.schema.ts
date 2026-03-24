import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';

import { DiagnosticImpressionFormKeys } from '../DiagnosticImpression/type';

export const HOME_ENVIRONMENT_SCHEMA: FormSchemaField<DiagnosticImpressionFormKeys>[] = [
    {
        name: DiagnosticImpressionFormKeys.SPEECH_DIAGNOSIS,
        label: 'Patterns of parental functioning :',
        type: 'radio',
        required: true,
        options: [
            { label: 'Permissiveness', value: 'Permissiveness' },
            { label: 'rigidity', value: 'rigidity' },
            { label: 'Consistency', value: 'Consistency' },
            { label: 'Inconsistency', value: 'Inconsistency' },
            { label: 'Strictness of discipline', value: 'Strictness of discipline' },
            { label: 'liberal', value: 'liberal' },
            { label: 'Disapproval', value: 'Disapproval' },
            { label: 'Protectiveness', value: 'Protectiveness' },
            { label: 'Non Protectiveness', value: 'Non Protectiveness' },
            { label: 'Tolerance of Deviance', value: 'Tolerance of Deviance' },
            { label: 'Non Tolerance', value: 'Non Tolerance' },
            { label: 'Non Tolerance', value: 'Non Tolerance' },
        ],
    },
    {
        name: DiagnosticImpressionFormKeys.SPEECH_DIAGNOSIS,
        label: 'Expectations from the child',
        type: 'radio',
        required: true,
        options: [
            { label: 'Any pressures', value: 'Any pressures' },
            { label: 'Deprivation', value: 'Deprivation' },
        ],
    },

    {
        name: DiagnosticImpressionFormKeys.FUNCTIONAL_COMMUNICATION,
        label: 'Patterns of Family Dynamics',
        type: 'text',
        required: true,
    },
];
