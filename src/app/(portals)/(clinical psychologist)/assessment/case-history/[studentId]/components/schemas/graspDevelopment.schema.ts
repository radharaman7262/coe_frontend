import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { FineMotorGraspKeys } from '../GrossDevelopmentChecklist/type';

export const GRASP_DEVELOPMENT_SCHEMA: FormSchemaField<FineMotorGraspKeys>[] = [
    {
        name: FineMotorGraspKeys.GRASP_CHECKLIST,
        label: 'Grasp Development Checklist',
        type: 'table',

        columns: [
            { key: 'label', label: 'Grasp Type' },
            {
                key: 'status',
                label: 'Present / Absent',
                type: 'select',
                options: [
                    { label: 'Present', value: 'present' },
                    { label: 'Absent', value: 'absent' },
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
                section: 'Grasp Development',
                sectionKey: 'graspDevelopment',
                items: [
                    {
                        key: 'palmarGrasp',
                        label: 'Palmar Grasp',
                    },
                    {
                        key: 'ulnarPalmar',
                        label: 'Ulnar Palmar Grasp',
                    },
                    {
                        key: 'radialPalmar',
                        label: 'Radial Palmar Grasp',
                    },
                    {
                        key: 'rakingGrasp',
                        label: 'Raking Grasp',
                    },
                    {
                        key: 'radialDigital',
                        label: 'Radial Digital Grasp',
                    },
                    {
                        key: 'inferiorPincer',
                        label: 'Inferior Pincer Grasp',
                    },
                    {
                        key: 'neatPincer',
                        label: 'Neat (Superior) Pincer',
                    },
                    {
                        key: 'lateralPinch',
                        label: 'Lateral Pinch',
                    },
                    {
                        key: 'cylindricalGrasp',
                        label: 'Cylindrical Grasp',
                    },
                    {
                        key: 'sphericalGrasp',
                        label: 'Spherical Grasp',
                    },
                    {
                        key: 'hookGrasp',
                        label: 'Hook Grasp',
                    },
                    {
                        key: 'tripodStatic',
                        label: 'Tripod Grasp (Static)',
                    },
                    {
                        key: 'tripodDynamic',
                        label: 'Tripod Grasp (Dynamic)',
                    },
                    {
                        key: 'discGrasp',
                        label: 'Disc Grasp',
                    },
                    {
                        key: 'transitionalGrasp',
                        label: 'Transitional Grasp',
                    },
                ],
            },
        ],
    },
];
