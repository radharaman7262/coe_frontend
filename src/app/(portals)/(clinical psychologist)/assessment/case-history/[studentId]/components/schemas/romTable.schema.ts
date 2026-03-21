import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ROMFormKeys } from '../ROM/type';

export const ROM_SCHEMA: FormSchemaField<ROMFormKeys>[] = [
    {
        name: ROMFormKeys.MUSCLE_TONE,
        label: '',
        type: 'table',

        columns: [
            { key: 'joint', label: 'Joint' },
            { key: 'motion', label: 'Motion' },
            {
                key: 'grade',
                label: 'WNL/NA',
                type: 'select',
                options: [
                    { label: 'WNL', value: 'WNL' },
                    { label: 'NA', value: 'NA' },
                ],
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],

        rows: [
            // 🔴 UPPER EXTREMITY
            {
                section: 'Upper Extremity',
                sectionKey: 'upperExtremity',
                items: [
                    {
                        key: 'shoulderFlexion',
                        label: 'Shoulder',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'shoulderAbduction',
                        label: 'Shoulder',
                        // motion: 'Abduction / Adduction',
                    },
                    {
                        key: 'shoulderRotation',
                        label: 'Shoulder',
                        // motion: 'Internal / External Rotation',
                    },

                    {
                        key: 'elbowFlexion',
                        label: 'Elbow',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'forearmRotation',
                        label: 'Forearm',
                        // motion: 'Supination / Pronation',
                    },

                    {
                        key: 'wristFlexion',
                        label: 'Wrist',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'wristDeviation',
                        label: 'Wrist',
                        // motion: 'Radial / Ulnar Deviation',
                    },

                    {
                        key: 'fingerFlexion',
                        label: 'Fingers',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'thumbOpposition',
                        label: 'Thumb',
                        // motion: 'Opposition / Abduction',
                    },
                ],
            },

            // 🔴 LOWER EXTREMITY
            {
                section: 'Lower Extremity',
                sectionKey: 'lowerExtremity',
                items: [
                    {
                        key: 'hipFlexion',
                        label: 'Hip',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'hipAbduction',
                        label: 'Hip',
                        // motion: 'Abduction / Adduction',
                    },
                    {
                        key: 'hipRotation',
                        label: 'Hip',
                        // motion: 'Internal / External Rotation',
                    },

                    {
                        key: 'kneeFlexion',
                        label: 'Knee',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'ankleFlexion',
                        label: 'Ankle',
                        // motion: 'Dorsiflexion / Plantarflexion',
                    },
                    {
                        key: 'ankleInversion',
                        label: 'Ankle',
                        // motion: 'Inversion / Eversion',
                    },

                    {
                        key: 'toesFlexion',
                        label: 'Toes',
                        // motion: 'Flexion / Extension',
                    },
                ],
            },
        ],
    },
];
