import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { FamilyHistoryFormKeys } from '../FamilyHistory/type';

export const FAMILY_HISTORY_SCHEMA: FormSchemaField<FamilyHistoryFormKeys>[] = [
    {
        name: FamilyHistoryFormKeys.FAMILY_TYPE,
        label: 'Family Type',
        type: 'radio',
        required: true,
        options: [
            { label: 'Joint Family', value: 'Joint Family' },
            { label: 'Nuclear Family', value: 'Nuclear Family' },
        ],
    },

    {
        name: FamilyHistoryFormKeys.SOCIOECONOMIC_STATUS,
        label: 'Socioeconomic status',
        type: 'radio',
        required: true,
        options: [
            { label: 'Lower', value: 'Lower' },
            { label: 'Middle', value: 'Middle' },
            { label: 'Upper', value: 'Upper' },
        ],
    },

    {
        name: FamilyHistoryFormKeys.HISTORY_OF_ILLNESS,
        label: 'History of illness / LD / ID / Chronic medical illness in the family',
        type: 'text',
        placeholder: 'Enter details',
        required: true,
        options: [],
    },

    {
        name: FamilyHistoryFormKeys.NUMBER_OF_SIBLINGS,
        label: 'Number of siblings',
        type: 'text',
        placeholder: 'Enter number',
        required: true,
        options: [],
    },

    {
        name: FamilyHistoryFormKeys.PRIMARY_CAREGIVER,
        label: 'Primary caregiver(s)',
        type: 'text',
        placeholder: 'Enter caregiver name',
        required: true,
        options: [],
    },

    {
        name: FamilyHistoryFormKeys.FAMILY_HISTORY_DELAY,
        label: 'Any family history of speech, hearing, or developmental delay?',
        type: 'text',
        placeholder: 'Enter details',
        required: true,
        options: [],
    },

    {
        name: FamilyHistoryFormKeys.CONSANGUINITY,
        label: 'Consanguinity',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    {
        name: FamilyHistoryFormKeys.FAMILY_GENOGRAM,
        label: 'Family Genogram',
        type: 'text',
        placeholder: 'Enter details',
        required: true,
        options: [],
    },
];
