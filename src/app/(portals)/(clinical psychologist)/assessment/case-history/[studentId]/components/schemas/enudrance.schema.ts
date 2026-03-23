import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { EnduranceFormKeys } from '../Endurance/type';

export const ENDURANCE_SCHEMA: FormSchemaField<EnduranceFormKeys>[] = [
    {
        name: EnduranceFormKeys.ENDURANCE,
        type: 'table',
        label: 'Non-Equilibrium Tests',
        columns: [
            {
                key: 'label',
                label: 'Test Item',
            },
            {
                key: 'observations',
                label: 'Observations to Record',
                type: 'text',
            },
        ],
        rows: [
            {
                section: 'Endurance Tests',
                sectionKey: 'edurance',
                items: [
                    {
                        key: 'upperLimbEndurance',
                        label: 'Upper Limb Endurance',
                    },
                    {
                        key: 'lowerLimbEndurance',
                        label: 'Lower Limb Endurance',
                    },

                    {
                        key: 'standingEndurance',
                        label: 'Standing Endurance',
                    },
                    {
                        key: 'sittingEndurance',
                        label: 'Sitting Endurance',
                    },
                    {
                        key: 'activitySpecific',
                        label: 'Activity specific (Eg. Cycling, Jumping, Walking)',
                    },
                ],
            },
        ],
    },
];
