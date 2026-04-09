import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';

import { PersonalBirthHistoryFormKeys } from '../PrenatalBirthHistory/type';

export const prenatalSchema: FormSchemaField<PersonalBirthHistoryFormKeys>[] = [
    {
        name: PersonalBirthHistoryFormKeys.CONCEPTION_TYPE,
        label: 'Conception Type',
        type: 'radio',
        required: true,
        options: [
            { label: 'Planned', value: 'Planned' },
            { label: 'Unplanned conception', value: 'Unplanned conception' },
        ],
    },

    {
        name: PersonalBirthHistoryFormKeys.BLEEDING_DURING_LATE_PREGNANCY,
        label: 'Bleeding during late pregnancy',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    {
        name: PersonalBirthHistoryFormKeys.PREGNANCY_HEALTH,
        label: 'Pregnancy Health',
        type: 'checkbox',
        required: true,
        options: [
            {
                label: 'Gestational Diabetes',
                value: 'Gestational Diabetes',
                key: 'gestationalDiabetes',
            },
            { label: 'Hypertension', value: 'Hypertension', key: 'hypertension' },
            { label: 'Jaundice', value: 'Jaundice', key: 'jaundice' },
            { label: 'Hyperthyroidism', value: 'Hyperthyroidism', key: 'hyperthyroidism' },
            { label: 'None Elicated', value: 'None Elicated', key: 'noneElicated' },
        ],
    },

    {
        name: PersonalBirthHistoryFormKeys.XRAY_EXPOSURE,
        label: 'X-ray Exposure',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    // {
    //     name: PersonalBirthHistoryFormKeys.CHIEF_COMPLAINTS,
    //     label: 'Chief Complaints',
    //     type: 'text',
    //     placeholder: 'Enter here',
    //     required: true,
    //     options: [],
    // },
    {
        name: PersonalBirthHistoryFormKeys.INFECTION_FEVER_RASH_STD,
        label: 'Infection / Fever / Rash / STD',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },

    {
        name: PersonalBirthHistoryFormKeys.HISTORY_OF_PSYCHOLOGICAL_STRESS,
        label: 'History of psychological stress',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    {
        name: PersonalBirthHistoryFormKeys.MOTHER_AGE_AT_BIRTH,
        label: "Mother's age at the time of child's birth",
        type: 'number',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },

    {
        name: PersonalBirthHistoryFormKeys.FETAL_GROWTH_RELATED_ISSUES,
        label: 'Any fetal growth related issues',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },
];
