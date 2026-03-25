import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { EnduranceFormKeys } from '../Endurance/type';

export const ENDURANCE_SCHEMA: FormSchemaField<EnduranceFormKeys>[] = [
    {
        name: EnduranceFormKeys.ENDURANCE,
        type: 'table',
        label: '',
        columns: [
            {
                key: 'label',
                label: 'Endurance',
            },
            {
                key: 'observations',
                label: 'Comments',
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
