import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ROMFormKeys } from '../ROM/type';

export const ROM_SCHEMA: FormSchemaField<ROMFormKeys>[] = [
    {
        name: ROMFormKeys.MUSCLE_TONE,
        label: '',
        type: 'table',

        columns: [
            { key: 'joint', label: 'Joint (Motion)' },
            // { key: 'motion', label: 'Motion' },
            {
                key: 'wnl',
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

        // {
        //         key: 'observed',
        //         label: 'Observed (Yes/No)',
        //         type: 'select',
        //         options: [
        //             { label: 'Yes', value: 'yes' },
        //             { label: 'No', value: 'no' },
        //         ],
        //     },
        //     {
        //         key: 'comments',
        //         label: 'Comments',
        //         type: 'text',
        //     },

        rows: [
            // 🔴 UPPER EXTREMITY
            {
                section: 'Upper Extremity',
                sectionKey: 'upperExtermity',
                items: [
                    {
                        key: 'shoulderFlexion',
                        label: 'Shoulder (Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'shoulderAbduction',
                        label: 'Shoulder(Abduction / Adduction)',
                        // motion: 'Abduction / Adduction',
                    },
                    {
                        key: 'shoulderRotation',
                        label: 'Shoulder(Internal / External Rotation)',
                        // motion: 'Internal / External Rotation',
                    },

                    {
                        key: 'elbowFlexion',
                        label: 'Elbow(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'forearmRotation',
                        label: 'Forearm(Supination / Pronation)',
                        // motion: 'Supination / Pronation',
                    },

                    {
                        key: 'wristFlexion',
                        label: 'Wrist(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'wristDeviation',
                        label: 'Wrist(Radial / Ulnar Deviation)',
                        // motion: 'Radial / Ulnar Deviation',
                    },

                    {
                        key: 'fingerFlexion',
                        label: 'Fingers(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'thumbOpposition',
                        label: 'Thumb(Opposition / Abduction)',
                        // motion: 'Opposition / Abduction',
                    },
                ],
            },

            // 🔴 LOWER EXTREMITY
            {
                section: 'Lower Extremity',
                sectionKey: 'lowerExterMity',
                items: [
                    {
                        key: 'hipFlexion',
                        label: 'Hip(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },
                    {
                        key: 'hipAbduction',
                        label: 'Hip(Abduction / Adduction)',
                        // motion: 'Abduction / Adduction',
                    },
                    {
                        key: 'hipRotation',
                        label: 'Hip(Internal / External Rotation)',
                        // motion: 'Internal / External Rotation',
                    },

                    {
                        key: 'kneeFlexion',
                        label: 'Knee(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },

                    {
                        key: 'ankleFlexion',
                        label: 'Ankle(Dorsiflexion / Plantarflexion)',
                        // motion: 'Dorsiflexion / Plantarflexion',
                    },
                    {
                        key: 'ankleInversion',
                        label: 'Ankle(Inversion / Eversion)',
                        // motion: 'Inversion / Eversion',
                    },

                    {
                        key: 'toesFlexion',
                        label: 'Toes(Flexion / Extension)',
                        // motion: 'Flexion / Extension',
                    },
                ],
            },
        ],
    },
];
