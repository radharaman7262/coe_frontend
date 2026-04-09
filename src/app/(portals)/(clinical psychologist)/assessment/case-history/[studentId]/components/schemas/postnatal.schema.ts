import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { PostNatalHistoryFormKeys } from '../PostNatalHistory/type';

export const postNatalSchema: FormSchemaField<PostNatalHistoryFormKeys>[] = [
    {
        name: PostNatalHistoryFormKeys.INFECTIONS,
        label: 'Infections',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },
    {
        name: PostNatalHistoryFormKeys.JAUNDICE,
        label: 'Jaundice',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: PostNatalHistoryFormKeys.FEEDING_ISSUES,
        label: 'Feeding issues',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: PostNatalHistoryFormKeys.HEAD_INJURY,
        label: 'Head injury',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    {
        name: PostNatalHistoryFormKeys.OTHER_COMPLICATIONS,
        label: 'Other complications',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        options: [],
    },

    {
        name: PostNatalHistoryFormKeys.VACCINATION,
        label: 'Vaccination',
        type: 'radio',
        required: true,
        options: [
            { label: 'Up-to-date', value: 'Up-to-date' },
            { label: 'Not up-to-date', value: 'Not up-to-date' },
            { label: 'Not Known', value: 'Not Known' },
        ],
    },

    // {
    //     name: PostNatalHistoryFormKeys.CHIEF_COMPLICATIONS,
    //     label: 'Chief Complaints',
    //     type: 'text',
    //     placeholder: 'Enter here',
    //     required: true,
    //     options: [],
    // },
];
