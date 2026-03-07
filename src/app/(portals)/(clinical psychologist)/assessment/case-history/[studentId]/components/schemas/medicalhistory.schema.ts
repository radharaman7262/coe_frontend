import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { MedicalHistoryFormKeys } from '../MedicalHistory/type';

export const MEDICAL_HISTORY_SCHEMA: FormSchemaField<MedicalHistoryFormKeys>[] = [
    {
        name: MedicalHistoryFormKeys.CURRENT_OR_PAST_MEDICAL_CONDITIONS,
        label: 'Current /past medical conditions',
        type: 'text',
        placeholder: 'e.g. seizures, fits, infection, asthma',
        required: true,
        options: [],
    },
    {
        name: MedicalHistoryFormKeys.ALLERGIES,
        label: 'Allergies',
        type: 'text',
        placeholder: 'e.g. food, medicine, environment',
        required: true,
        options: [],
    },

    {
        name: MedicalHistoryFormKeys.MAJOR_ILLNESS,
        label: 'Any major illnesses',
        type: 'text',
        placeholder: 'e.g., measles, meningitis, TB',
        required: true,
        options: [],
    },

    {
        name: MedicalHistoryFormKeys.FREQUENT_INFECTIONS,
        label: 'Frequent cold/fever/ear infections',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    {
        name: MedicalHistoryFormKeys.PREVIOUS_TREATMENT,
        label: 'Any previous treatment/medications taken',
        type: 'text',
        placeholder: 'e.g., measles, meningitis, TB',
        required: true,
        options: [],
    },

    {
        name: MedicalHistoryFormKeys.DIAGNOSED_DISABILITY,
        label: 'Any diagnosed disability',
        type: 'checkbox',
        required: true,
        options: [
            { label: 'Autism', value: 'Autism' },
            { label: 'ADHD', value: 'ADHD' },
            { label: 'Intellectual Disability', value: 'Intellectual Disability' },
            { label: 'Cerebral Palsy', value: 'Cerebral Palsy' },
            { label: 'Hearing Loss', value: 'Hearing Loss' },
            { label: 'Others', value: 'Others' },
        ],
    },
];
