import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DiagnosticImpressionFormKeys } from '../DiagnosticImpression/type';

export const DIAGNOSTIC_IMPRESSION_SCHEMA: FormSchemaField<DiagnosticImpressionFormKeys>[] = [
    {
        name: DiagnosticImpressionFormKeys.SPEECH_DIAGNOSIS,
        label: 'Speech diagnosis',
        type: 'radio',
        required: true,
        options: [
            { label: 'Articulation disorder ', value: 'Articulation disorder' },
            { label: 'Resonance disorder', value: 'Resonance disorder' },
            { label: 'Compensatory speech errors', value: 'Compensatory speech errors' },
        ],
    },
    {
        name: DiagnosticImpressionFormKeys.LANGUAGE_DIAGNOSIS,
        label: 'Language diagnosis',
        type: 'radio',
        required: true,
        options: [
            { label: 'Age-appropriate', value: 'Age-appropriate' },
            { label: 'Delay', value: 'Delay' },
            { label: 'Disorder', value: 'Disorder' },
            { label: 'Pragmatic concern', value: 'Pragmatic concern' },
        ],
    },
    {
        name: DiagnosticImpressionFormKeys.FUNCTIONAL_COMMUNICATION,
        label: 'Functional communication',
        type: 'radio',
        required: true,
        options: [
            { label: 'Adequate', value: 'Adequate' },
            { label: 'Limited ', value: 'Limited ' },
        ],
    },
];
