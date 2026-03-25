import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { EquilibriumFormKeys } from '../EquilibriumTest/type';

export const EQUILIBRIUM_SCHEMA: FormSchemaField<EquilibriumFormKeys>[] = [
    {
        name: EquilibriumFormKeys.EQUILIBRIUM,
        type: 'table',
        label: '',
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
                sectionKey: 'equilibriumTests',
                items: [
                    {
                        key: 'sittingBalance',
                        label: 'Sitting Balance',
                    },
                    {
                        key: 'standingBalanceRomberg',
                        label: 'Standing Balance (Romberg Test)',
                    },
                    {
                        key: 'balanceBeamWalk',
                        label: 'Balance Beam Walk',
                    },
                    {
                        key: 'protectiveExtension',
                        label: 'Protective Extension (Forward/Side/Back)',
                    },
                    {
                        key: 'tiltingReactions',
                        label: 'Tilting Reactions',
                    },
                    {
                        key: 'posturalFixation',
                        label: 'Postural Fixation',
                    },
                    {
                        key: 'skippingHoppingGalloping',
                        label: 'Skipping/Hopping/Galloping',
                    },
                ],
            },
        ],
    },
];
