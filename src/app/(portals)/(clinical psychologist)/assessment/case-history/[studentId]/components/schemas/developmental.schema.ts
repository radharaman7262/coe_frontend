import { FormSchemaField } from '../../../../../../../../components/shared/Forms/types/form.types';

import { DevelopmentalMilestoneFormKeys } from '../DevelopmentalMilestone/type';

export const DEVELOPMENTAL_MILESTONE_SCHEMA: FormSchemaField<DevelopmentalMilestoneFormKeys>[] = [
    {
        name: DevelopmentalMilestoneFormKeys.MOTOR_MILESTONE,
        label: 'Motor milestones (gross/fine)',
        type: 'radio',
        required: true,
        options: [
            { label: 'On time', value: 'onTime' },
            { label: 'Delayed', value: 'delayed' },
        ],
    },

    {
        name: DevelopmentalMilestoneFormKeys.SPEECH_LANGUAGE_MILESTONE,
        label: 'Speech-language milestones',
        type: 'radio',
        required: true,
        options: [
            { label: 'On time', value: 'onTime' },
            { label: 'Delayed', value: 'delayed' },
        ],
    },

    {
        name: DevelopmentalMilestoneFormKeys.SOCIAL_DEVELOPMENT,
        label: 'Pregnancy Health',
        type: 'text',
        required: true,
    },

    {
        name: DevelopmentalMilestoneFormKeys.COGNITIVE_CONCERNS,
        label: 'X-ray Exposure',
        type: 'text',
        required: true,
    },
];
