import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ChiefComplainsFormKeys } from '../ChiefComplains/type';
import { GENERAL_OBSERVATION_OPTION } from '../ChiefComplains/constant';

export const CHIEF_COMPLAINT: FormSchemaField<ChiefComplainsFormKeys>[] = [
    // 🔹 Chief Complaints
    {
        name: ChiefComplainsFormKeys.CHIEF_COMPLAINTS,
        label: 'Chief Complaints',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },

    // 🔹 General Observation
    {
        name: ChiefComplainsFormKeys.GENERAL_OBSERVATION,
        label: 'General Observation',
        type: 'checkbox',
        required: true,
        options:GENERAL_OBSERVATION_OPTION,
    },
];
