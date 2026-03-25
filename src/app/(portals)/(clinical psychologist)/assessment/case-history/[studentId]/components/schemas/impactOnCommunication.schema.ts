import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ImpactOnCommunicationFormKeys } from '../ImpactOnCommunication/type';

export const IMPACT_ON_COMMUNICATION_SCHEMA: FormSchemaField<ImpactOnCommunicationFormKeys>[] = [
    {
        name: ImpactOnCommunicationFormKeys.DISRUPTS_DAILY_INTERACTION,
        type: 'radio',
        label: 'Voice disrupts daily interaction',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        name: ImpactOnCommunicationFormKeys.SOCIAL_WITHDRAWAL,
        type: 'radio',
        label: 'Social withdrawal or embarrassment observed',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        name: ImpactOnCommunicationFormKeys.PEER_TEASING,
        type: 'radio',
        label: 'Peer teasing / imitation',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        name: ImpactOnCommunicationFormKeys.CHILD_AWARENESS,
        type: 'radio',
        label: 'Child’s awareness of voice difference',
        options: [
            { label: 'Aware', value: 'Aware' },
            { label: 'Unaware', value: 'Unaware' },
            { label: 'Anxious', value: 'Anxious' },
        ],
    },
    {
        name: ImpactOnCommunicationFormKeys.PARENT_CONCERN,
        type: 'radio',
        label: 'Parent’s concern about functional impact',
        options: [
            { label: 'Low', value: 'Low' },
            { label: 'Moderate', value: 'Moderate' },
        ],
    },
];
