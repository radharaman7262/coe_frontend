import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';
import { OPTIONS } from '../MedicalDevelopmentalHistory/constant';

import { MedicalDevelopmentalHistoryFormKeys } from '../MedicalDevelopmentalHistory/type';

export const MEDICAL_DEVELOPMENTAL_HISTORY_SCHEMA: FormSchemaField<MedicalDevelopmentalHistoryFormKeys>[] =
    [
        {
            name: MedicalDevelopmentalHistoryFormKeys.BIRTH_HISTORY,
            label: 'Birth History',
            type: 'radio',
            required: true,
            options: OPTIONS,
        },
        {
            name: MedicalDevelopmentalHistoryFormKeys.PERINATAL_HISTORY,
            label: 'Perinatal history',
            type: 'radio',
            required: true,
            options: [
                { label: 'Hypoxia', value: 'Hypoxia' },
                { label: 'NICU', value: 'NICU' },
                { label: 'Infections', value: 'Infections' },
            ],
        },
        {
            name: MedicalDevelopmentalHistoryFormKeys.COMORBIDITIES,
            label: 'Comorbidities',
            type: 'checkbox',
            required: true,
            options: [
                { label: 'Seizures', value: 'Seizures' },
                { label: 'Vision', value: 'Vision' },
                { label: 'Hearing', value: 'Hearing' },
                { label: 'Intellectual Disability', value: 'Intellectual Disability' },
            ],
        },
        {
            name: MedicalDevelopmentalHistoryFormKeys.MEDICATIONS,
            label: 'Medications',
            type: 'text',
            placeholder: 'Enter here',
            required: true,
            options: [],
        },
        {
            name: MedicalDevelopmentalHistoryFormKeys.MOTOR_MILE_STONES,
            label: 'Motor milestones',
            type: 'radio',
            required: true,
            options: [
                { label: 'Delayed', value: 'Delayed' },
                { label: 'Within normal limits', value: 'Within normal limits' },
            ],
        },
        {
            name: MedicalDevelopmentalHistoryFormKeys.SENSORY_PROFILE,
            label: 'Sensory profile',
            type: 'radio',
            required: true,
            options: [
                { label: 'Hypersensitive', value: 'Hypersensitive' },
                { label: 'Hyposensitive', value: 'Hyposensitive' },
                { label: 'Mixed', value: 'Mixed' },
            ],
        },
    ];
