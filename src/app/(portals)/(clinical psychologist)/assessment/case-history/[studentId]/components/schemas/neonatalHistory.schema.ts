import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { NeonatalHistoryFormKeys } from '../NeonatalHistory/type';

export const NEO_NATAL_HISTORY_SCHEMA: FormSchemaField<NeonatalHistoryFormKeys>[] = [
    {
        name: NeonatalHistoryFormKeys.TERM,
        label: 'Term',
        type: 'text',
        required: true,
        options: [
            { label: 'Preterm', value: 'Preterm' },
            { label: 'Full Term', value: 'Full Term' },
            { label: 'Post Term', value: 'Post Term' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.TYPE_OF_DELIVERY,
        label: 'Type of Delivery',
        type: 'text',
        required: true,
        options: [
            { label: 'Normal', value: 'Normal' },
            { label: 'C-Section', value: 'C-Section' },
            { label: 'Assisted Delivery', value: 'Assisted Delivery' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.COMPLICATIONS_DURING_BIRTH,
        label: 'Complications during birth',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },

    {
        name: NeonatalHistoryFormKeys.HEAD_INJURY_DURING_BIRTH,
        label: 'Head Injury during birth',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.BIRTH_WEIGHT,
        label: 'Birth Weight',
        type: 'radio',
        required: true,
        options: [
            { label: 'Normal (2.5Kg)', value: 'Normal' },
            { label: 'Low', value: 'Low' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.BIRTH_CRY,
        label: 'Birth Cry',
        type: 'radio',
        required: true,
        options: [
            { label: 'Immediate', value: 'Immediate' },
            { label: 'Delayed', value: 'Delayed' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.NICU_STAY,
        label: 'NICU Stay',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ],
    },

    {
        name: NeonatalHistoryFormKeys.NICU_DURATION,
        label: 'NICU Duration',
        type: 'radio',
        placeholder: 'Select duration',
        required: true,
        // options: [
        //     { label: '1-3 Days', value: '1-3 Days' },
        //     { label: '4-7 Days', value: '4-7 Days' },
        //     { label: '1-2 Weeks', value: '1-2 Weeks' },
        //     { label: 'More than 2 Weeks', value: 'More than 2 Weeks' },
        // ],
        options:[],
    },

    {
        name: NeonatalHistoryFormKeys.BIRTH_POSITION_TETHERED_CORD,
        label: 'Birth position / tethered cord',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
];
