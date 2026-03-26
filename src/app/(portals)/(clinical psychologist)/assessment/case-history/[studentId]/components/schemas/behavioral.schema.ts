import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { BehavioralSchemaFormKeys } from '../BehavioralObservation/type';

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

export const BEHAVIORAL_OBSERVATION_SCHEMA: FormSchemaField<BehavioralSchemaFormKeys>[] = [
    {
        name: BehavioralSchemaFormKeys.IN_HAND_MANIPULATION,
        label: 'Behavioral Observation',
        type: 'table',

        columns: [
            { key: 'label', label: 'Area' },
            {
                key: 'value',
                label: 'Observation',
                type: 'checkbox',
                // dynamic per row
            },
        ],

        rows: [
            {
                section: 'Behavioral Observation',
                sectionKey: 'behavioralObservation',
                items: [
                    {
                        key: 'alertness',
                        label: 'Alertness',
                        options: ALERTNESS,
                    },
                    {
                        key: 'eyeContact',
                        label: 'Eye Contact',
                        options: EYE_CONTACT_OPTIONS,
                    },
                    {
                        key: 'jointAttention',
                        label: 'Joint Attention',
                        options: ATTENTION,
                    },
                    {
                        key: 'imitation',
                        label: 'Imitation',
                        options: IMITATION,
                    },
                    {
                        key: 'sittingTolerance',
                        label: 'Sitting Tolerance',
                        options: SITTING_TOLERANCE,
                    },
                    {
                        key: 'sensoryBehaviors',
                        label: 'Sensory Behaviors',
                        options: SENSORY_BEHAVIOR,
                    },
                    {
                        key: 'transitions',
                        label: 'Transitions',
                        options: TRANSITIONS,
                    },
                    {
                        key: 'emotionalRegulation',
                        label: 'Emotional Regulation',
                        options: EMOTIONAL,
                    },
                ],
            },
        ],
    },
];
