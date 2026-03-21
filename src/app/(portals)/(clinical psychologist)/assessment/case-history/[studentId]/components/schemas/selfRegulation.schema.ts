import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { SelfRegulationFormKeys } from '../SelfRegulation/type';

export const SELF_REGULATION_SCHEMA: FormSchemaField<SelfRegulationFormKeys>[] = [
    {
        name: SelfRegulationFormKeys.BEHAVIOURS,
        type: 'table',
        label: 'Self-Regulation & Coping',
        columns: [
            {
                key: 'label',
                label: 'Behavior/Skill',
            },
            {
                key: 'observed',
                label: 'Observed (Yes/No)',
                type: 'select',
                options: [
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                ],
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],
        rows: [
            {
                section: 'Self Regulation',
                sectionKey: 'behaviors',
                items: [
                    {
                        key: 'toleratesRoutineChanges',
                        label: 'Tolerates changes in routine/environment',
                    },
                    {
                        key: 'transitionsBetweenActivities',
                        label: 'Transitions between activities with minimal distress',
                    },
                    {
                        key: 'usesCalmingStrategies',
                        label: 'Uses calming strategies independently (e.g., deep breaths, sensory input)',
                    },
                    {
                        key: 'requiresAdultAssistance',
                        label: 'Requires adult assistance to self-regulate',
                    },
                    {
                        key: 'delayedEmotionalResponse',
                        label: 'Demonstrates delayed or prolonged emotional responses',
                    },
                    {
                        key: 'identifiesOverwhelm',
                        label: 'Can identify when feeling overwhelmed',
                    },
                ],
            },
        ],
    },
];
