import { FormSchemaField } from "@/components/shared/Forms/types/form.types";

import { CPDiagnosticImpressionFormKeys } from "../CPDiagnosticImpression/type";

export const CP_DIAGNOSTIC_IMPRESSION_SCHEMA: FormSchemaField<CPDiagnosticImpressionFormKeys>[] = [
    {
        name: CPDiagnosticImpressionFormKeys.SPEECH_DISORDER,
        label: 'Motor speech disorder suspected',
        type: 'radio',
        required: true,
        options: [
            { label: 'Dysarthria', value: 'Dysarthria' },
            { label: 'Apraxia', value: 'Apraxia' },
            { label: 'None', value: 'None' },
        ],
    },
    {
        name: CPDiagnosticImpressionFormKeys.LANGUAGE_PROFILE,
        label: 'Language profile',
        type: 'radio',
        required: true,
        options: [
            { label: 'Age-appropriate', value: 'Age-appropriate' },
            { label: 'Delayed', value: 'Delayed' },
            { label: 'Disordered', value: 'Disordered' },
        ],
    },
    {
        name: CPDiagnosticImpressionFormKeys.COMMUNICATION_INTENT,
        label: 'Communication intent',
        type: 'radio',
        required: true,
        options: [
            { label: 'Adequate', value: 'Adequate' },
            { label: 'Limited', value: 'Limited' },
            { label: 'Absent', value: 'Absent' },
        ],
    },
    {
        name: CPDiagnosticImpressionFormKeys.SPEECH_INTELLIGIBILITY,
        label: 'Speech intelligibility',
        type: 'radio',
        required: true,
        options: [
            { label: 'Mild', value: 'Mild' },
            { label: 'Moderate', value: 'Moderate' },
            { label: 'Severe impairment', value: 'Severe impairment' },
        ],
    },
    {
        name: CPDiagnosticImpressionFormKeys.FUNCTIONAL_COMMUNICATION,
        label: 'Functional communication',
        type: 'radio',
        required: true,
        options: [
            { label: 'Verbal', value: 'Verbal' },
            { label: 'Nonverbal', value: 'Nonverbal' },
            { label: 'AAC-reliant', value: 'AAC-reliant' },
        ],
    },
];