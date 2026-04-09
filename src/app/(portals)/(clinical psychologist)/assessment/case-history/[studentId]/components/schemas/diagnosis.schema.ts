import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { DiagnosisFormKeys } from '../Diagnosis/type';

export const DIAGNOSIS_SCHEMA: FormSchemaField<DiagnosisFormKeys>[] = [
    {
        name: DiagnosisFormKeys.DIAGNOSIS_FORMULATION,
        label: 'Diagnostic Formulation',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: DiagnosisFormKeys.DIAGNOSIS,
        label: 'Diagnosis',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: DiagnosisFormKeys.RECOMMENDATION,
        label: 'Recommendation',
        type: 'text',
        placeholder: 'Type here',
        required: true,
        options: [],
    },

    {
        name: DiagnosisFormKeys.NOTES,
        label: 'Notes',
        type: 'textArea',
        placeholder: 'Any Comments / Note',
        required: true,
    },
];
