import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { NonEquilibriumFormKeys } from '../NonEquilibriumTest/type';

export const NON_EQUILIBRIUM_SCHEMA: FormSchemaField<NonEquilibriumFormKeys>[] = [
    {
        name: NonEquilibriumFormKeys.NON_EQUILIBRIUM,
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
                section: 'Non-Equilibrium Tests',
                sectionKey: 'nonEquilibriumTests',
                items: [
                    {
                        key: 'fingerToNose',
                        label: 'Finger-to-Nose Test',
                    },
                    {
                        key: 'fingerToFinger',
                        label: 'Finger-to-Finger Test',
                    },
                    {
                        key: 'alternateSupinationPronation',
                        label: 'Alternate Supination-Pronation (Rapid Alternating Movements)',
                    },
                    {
                        key: 'heelToShin',
                        label: 'Heel-to-Shin Test',
                    },
                    {
                        key: 'toeToFinger',
                        label: 'Toe-to-Finger Test',
                    },
                    {
                        key: 'tappingTest',
                        label: 'Tapping Test',
                    },
                    {
                        key: 'drawingCircle',
                        label: 'Drawing Circle with Finger/Foot',
                    },
                ],
            },
        ],
    },
];
