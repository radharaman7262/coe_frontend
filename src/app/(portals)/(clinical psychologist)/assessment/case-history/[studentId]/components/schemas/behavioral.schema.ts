import { FormSchemaField } from '@/components/shared/Forms/types/form.types';



import {
    ALERTNESS,
    ATTENTION,
    EMOTIONAL,
    EYE_CONTACT_OPTIONS,
    IMITATION,
    SENSORY_BEHAVIOR,
    SITTING_TOLERANCE,
    TRANSITIONS,
} from '../BehavioralObservation/constant';

import { BehavioralSchemaFormKeys } from '../BehavioralObservation/type';

export const BEHAVIORAL_OBSERVATION_SCHEMA: FormSchemaField<BehavioralSchemaFormKeys>[] = [
    {
        name: BehavioralSchemaFormKeys.ALERTNESS,
        type: 'checkbox',
        label: 'Alertness',
        options: ALERTNESS,
    },
    {
        name: BehavioralSchemaFormKeys.EYE_CONTACT,
        type: 'checkbox',
        label: 'Eye Contact',
        options:EYE_CONTACT_OPTIONS,
    },
    {
        name: BehavioralSchemaFormKeys.JOINT_ATTENTION,
        type: 'checkbox',
        label: 'Joint Attention',
        options: ATTENTION,
    },
    {
        name: BehavioralSchemaFormKeys.IMITATION,
        type: 'checkbox',
        label: 'Imitation',
        options:IMITATION,
    },
    {
        name: BehavioralSchemaFormKeys.SITTING_TOLERANCE,
        type: 'checkbox',
        label: 'Sitting Tolerance',
        options: SITTING_TOLERANCE,
    },
    {
        name: BehavioralSchemaFormKeys.SENSORY_BEHAVIORS,
        type: 'checkbox',
        label: 'Sensory Behaviors',
        options: SENSORY_BEHAVIOR,
    },
    {
        name: BehavioralSchemaFormKeys.TRANSITIONS,
        type: 'checkbox',
        label: 'Transitions',
        options: TRANSITIONS,
    },
    {
        name: BehavioralSchemaFormKeys.EMOTIONAL_REGULATION,
        type: 'checkbox',
        label: 'Emotional Regulation',
        options: EMOTIONAL,
    },
];
