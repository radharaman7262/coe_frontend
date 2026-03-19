import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { ScholasticHistoryFormKeys } from '../ScholasticHistory/type';
import { OPTIONS } from '../ScholasticHistory/constant';

export const SCHOLASTIC_HISTORY_SCHEMA: FormSchemaField<ScholasticHistoryFormKeys>[] = [
    {
        name: ScholasticHistoryFormKeys.TYPE_OF_SCHOOL,
        label: 'Type of School',
        type: 'radio',
        required: true,
        options: [
            { label: 'Inclusive School', value: 'Inclusive School' },
            { label: 'Special School', value: 'Special School' },
            { label: 'At Home', value: 'At Home' },
        ],
    },

    {
        name: ScholasticHistoryFormKeys.AGE_OF_ENTRY,
        label: 'Age of Entry',
        type: 'text',
        placeholder: 'e.g. 9',
        required: true,
        options: [],
    },

    {
        name: ScholasticHistoryFormKeys.SCHOOLING_DETAILS,
        label: 'Schooling details (Changes in school, duration with reason)',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },

    {
        name: ScholasticHistoryFormKeys.SCHOLASTIC_PERFORMANCE,
        label: 'Scholastic Performance',
        type: 'radio',
        required: true,
        options: [
            { label: 'Good', value: 'Good' },
            { label: 'Average', value: 'Average' },
            { label: 'Poor', value: 'Poor' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: ScholasticHistoryFormKeys.ATTENDANCE,
        label: 'Attendance',
        type: 'radio',
        required: true,
        options: [
            { label: 'Regular', value: 'Regular' },
            { label: 'Irregular', value: 'Irregular' },
            { label: 'Discontinued', value: 'Discontinued' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },
    {
        name: ScholasticHistoryFormKeys.REASONS_FOR_IRREGULARITY,
        label: 'Reasons for Irregularity / Discontinuity',
        type: 'checkbox',
        required: true,
        options: OPTIONS,
    },
];
