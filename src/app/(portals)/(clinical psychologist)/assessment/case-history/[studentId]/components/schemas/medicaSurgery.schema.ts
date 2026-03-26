import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { MedicalHistoryFormKeys } from '../MedicalAndSurgicalHistory/type';

export const MEDICAL_SURGICAL_HISTORY_SCHEMA: FormSchemaField<MedicalHistoryFormKeys>[] = [
    {
        name: MedicalHistoryFormKeys.TYPE_OF_CLEFT,
        label: 'Type of cleft',
        type: 'text',
        placeholder: 'Enter here',
    },
    {
        name: MedicalHistoryFormKeys.DATE_OF_DIAGNOSIS,
        label: 'Date of diagnosis',
        type: 'text', // or 'date' if supported
        placeholder: 'Enter here',
    },

    // 🔹 Surgical interventions (grouped fields)
    {
        name: MedicalHistoryFormKeys.LIP_REPAIR,
        label: 'Lip repair',
        type: 'text',
        placeholder: 'Enter here',
    },
    // {
    //     name: MedicalHistoryFormKeys.PALATE_REPAIR,
    //     label: 'Palate repair',
    //     type: 'text',
    //     placeholder: 'Enter here',
    // },
    // {
    //     name: MedicalHistoryFormKeys.OTHER_SURGERY,
    //     label: 'Other',
    //     type: 'text',
    //     placeholder: 'Enter here',
    // },

    // 🔹 Hearing Status (checkbox group)
    {
        name: MedicalHistoryFormKeys.HEARING_STATUS,
        label: 'Hearing status',
        type: 'checkbox',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Recurrent otitis media', value: 'recurrentOtitisMedia' },
            { label: 'Hearing loss', value: 'hearingLoss' },
        ],
    },

    {
        name: MedicalHistoryFormKeys.ENT_REPORTS,
        label: 'ENT reports / Audiology',
        type: 'text',
        placeholder: 'Enter here',
    },

    // 🔹 Feeding history (radio → single select)
    {
        name: MedicalHistoryFormKeys.FEEDING_HISTORY,
        label: 'Feeding history (infancy)',
        type: 'radio',
        options: [
            { label: 'Nasal regurgitation', value: 'nasalRegurgitation' },
            { label: 'Sucking difficulty', value: 'suckingDifficulty' },
            { label: 'G-tube use', value: 'gTubeUse' },
        ],
    },

    {
        name: MedicalHistoryFormKeys.COMORBIDITIES,
        label: 'Comorbidities (e.g cardiac, syndromes)',
        type: 'text',
        placeholder: 'Enter here',
    },
];
