import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

export const COORDINATION_SCHEMA: FormSchemaField<'coordination'>[] = [
    {
        name: 'coordination',
        type: 'table',
        label: 'Coordination',
        columns: [
            {
                key: 'label',
                label: 'Type',
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],
        rows: [
            {
                section: 'Coordination',
                sectionKey: 'coordinationTypes',
                items: [
                    {
                        key: 'bilateralCoordination',
                        label: 'Bilateral Coordination',
                    },
                    {
                        key: 'eyeHandCoordination',
                        label: 'Eye-Hand Coordination',
                    },
                ],
            },
        ],
    },
];
