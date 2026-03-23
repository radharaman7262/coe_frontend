import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { BehavioralSchemaFormKeys } from '../BehavioralObservation/type';

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
                type: 'checkbox', // 👈 IMPORTANT (checkbox group)
                options: [
                    {
                        label:'Paras',key:'paras',value:"paaras"
                    }
                ], // dynamic per row
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
                        options: [
                            { label: 'Hyper-alert', value: 'hyperAlert' },
                            { label: 'Inattentive', value: 'inattentive' },
                            { label: 'Variable', value: 'variable' },
                            { label: 'WNL', value: 'wnl' },
                        ],
                    },
                    {
                        key: 'eyeContact',
                        label: 'Eye Contact',
                        options: [
                            { label: 'Appropriate', value: 'appropriate' },
                            { label: 'Fleeting', value: 'fleeting' },
                            { label: 'Absent', value: 'absent' },
                            { label: 'Avoidant', value: 'avoidant' },
                        ],
                    },
                    {
                        key: 'jointAttention',
                        label: 'Joint Attention',
                        options: [
                            { label: 'Present', value: 'present' },
                            { label: 'Emerging', value: 'emerging' },
                            { label: 'Absent', value: 'absent' },
                        ],
                    },
                    {
                        key: 'imitation',
                        label: 'Imitation',
                        options: [
                            { label: 'Gross', value: 'gross' },
                            { label: 'Fine', value: 'fine' },
                            { label: 'Vocal', value: 'vocal' },
                            { label: 'Absent', value: 'absent' },
                        ],
                    },
                    {
                        key: 'sittingTolerance',
                        label: 'Sitting Tolerance',
                        options: [
                            { label: 'Adequate', value: 'adequate' },
                            { label: 'Poor', value: 'poor' },
                            { label: 'Needs prompts', value: 'needsPrompts' },
                        ],
                    },
                    {
                        key: 'sensoryBehaviors',
                        label: 'Sensory Behaviors',
                        options: [
                            { label: 'Hyper', value: 'hyper' },
                            { label: 'Hypo', value: 'hypo' },
                            { label: 'Seeking', value: 'seeking' },
                        ],
                    },
                    {
                        key: 'transitions',
                        label: 'Transitions',
                        options: [
                            { label: 'Smooth', value: 'smooth' },
                            { label: 'Resists', value: 'resists' },
                            { label: 'Meltdown', value: 'meltdown' },
                        ],
                    },
                    {
                        key: 'emotionalRegulation',
                        label: 'Emotional Regulation',
                        options: [
                            { label: 'Calm', value: 'calm' },
                            { label: 'Over-reactive', value: 'overReactive' },
                            { label: 'Dysregulated', value: 'dysregulated' },
                        ],
                    },
                ],
            },
        ],
    },
];