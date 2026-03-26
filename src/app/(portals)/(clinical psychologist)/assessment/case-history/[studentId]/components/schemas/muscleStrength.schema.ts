import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { MuscleStrengthFormKeys } from '../MuscleStrength/type';

export const MUSCLE_STRENGTH_SCHEMA: FormSchemaField<MuscleStrengthFormKeys>[] = [
    {
        name: MuscleStrengthFormKeys.MUSCLE_STRENGTH,
        label: '',
        type: 'table',

        columns: [
            { key: 'label', label: 'Muscle Group' },
            {
                key: 'grade',
                label: 'Grade',
                type: 'select',
                options: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '1+', value: '1+' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                ],
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],

        rows: [
            // 🔴 UPPER LIMB
            {
                section: 'Upper Limb',
                sectionKey: 'upperLimb',
                items: [
                    { key: 'shoulderFlexorsLeft', label: 'Shoulder Flexors (Left)' },
                    { key: 'shoulderFlexorsRight', label: 'Shoulder Flexors (Right)' },

                    { key: 'shoulderExtensorsLeft', label: 'Shoulder Extensors (Left)' },
                    { key: 'shoulderExtensorsRight', label: 'Shoulder Extensors (Right)' },

                    { key: 'shoulderAbductorsLeft', label: 'Shoulder Abductors (Left)' },
                    { key: 'shoulderAbductorsRight', label: 'Shoulder Abductors (Right)' },

                    { key: 'elbowFlexorsLeft', label: 'Elbow Flexors (Left)' },
                    { key: 'elbowFlexorsRight', label: 'Elbow Flexors (Right)' },

                    { key: 'elbowExtensorsLeft', label: 'Elbow Extensors (Left)' },
                    { key: 'elbowExtensorsRight', label: 'Elbow Extensors (Right)' },

                    { key: 'forearmSupinatorsLeft', label: 'Forearm Supinators (Left)' },
                    { key: 'forearmSupinatorsRight', label: 'Forearm Supinators (Right)' },

                    { key: 'forearmPronatorsLeft', label: 'Forearm Pronators (Left)' },
                    { key: 'forearmPronatorsRight', label: 'Forearm Pronators (Right)' },

                    { key: 'wristFlexorsLeft', label: 'Wrist Flexors (Left)' },
                    { key: 'wristFlexorsRight', label: 'Wrist Flexors (Right)' },

                    { key: 'wristExtensorsLeft', label: 'Wrist Extensors (Left)' },
                    { key: 'wristExtensorsRight', label: 'Wrist Extensors (Right)' },

                    { key: 'fingerFlexorsLeft', label: 'Finger Flexors (Left)' },
                    { key: 'fingerFlexorsRight', label: 'Finger Flexors (Right)' },

                    { key: 'fingerExtensorsLeft', label: 'Finger Extensors (Left)' },
                    { key: 'fingerExtensorsRight', label: 'Finger Extensors (Right)' },

                    { key: 'intrinsicsLeft', label: 'Intrinsics (Grip/Pinch) (Left)' },
                    { key: 'intrinsicsRight', label: 'Intrinsics (Grip/Pinch) (Right)' },
                ],
            },

            // 🔴 LOWER LIMB
            {
                section: 'Lower Limb',
                sectionKey: 'lowerLimb',
                items: [
                    { key: 'hipFlexorsLeft', label: 'Hip Flexors (Left)' },
                    { key: 'hipFlexorsRight', label: 'Hip Flexors (Right)' },

                    { key: 'hipExtensorsLeft', label: 'Hip Extensors (Left)' },
                    { key: 'hipExtensorsRight', label: 'Hip Extensors (Right)' },

                    { key: 'hipAbductorsLeft', label: 'Hip Abductors (Left)' },
                    { key: 'hipAbductorsRight', label: 'Hip Abductors (Right)' },

                    { key: 'hipAdductorsLeft', label: 'Hip Adductors (Left)' },
                    { key: 'hipAdductorsRight', label: 'Hip Adductors (Right)' },

                    { key: 'kneeFlexorsLeft', label: 'Knee Flexors (Left)' },
                    { key: 'kneeFlexorsRight', label: 'Knee Flexors (Right)' },

                    { key: 'kneeExtensorsLeft', label: 'Knee Extensors (Left)' },
                    { key: 'kneeExtensorsRight', label: 'Knee Extensors (Right)' },

                    { key: 'ankleDorsiflexorsLeft', label: 'Ankle Dorsiflexors (Left)' },
                    { key: 'ankleDorsiflexorsRight', label: 'Ankle Dorsiflexors (Right)' },

                    { key: 'anklePlantarflexorsLeft', label: 'Ankle Plantar Flexors (Left)' },
                    { key: 'anklePlantarflexorsRight', label: 'Ankle Plantar Flexors (Right)' },

                    { key: 'footInvertorsLeft', label: 'Foot Invertors (Left)' },
                    { key: 'footInvertorsRight', label: 'Foot Invertors (Right)' },

                    { key: 'footEvertorsLeft', label: 'Foot Evertors (Left)' },
                    { key: 'footEvertorsRight', label: 'Foot Evertors (Right)' },
                ],
            },

            // 🔴 TRUNK & NECK
            {
                section: 'Trunk & Neck',
                sectionKey: 'trunckNeck',
                items: [
                    {
                        key: 'neckFlexors',
                        label: 'Neck Flexors',
                    },
                    {
                        key: 'neckExtensors',
                        label: 'Neck Extensors',
                    },
                    {
                        key: 'trunkFlexors',
                        label: 'Trunk Flexors',
                    },
                    {
                        key: 'trunkExtensors',
                        label: 'Trunk Extensors',
                    },
                    {
                        key: 'trunkRotators',
                        label: 'Trunk Rotators',
                    },
                    {
                        key: 'lateralFlexors',
                        label: 'Lateral Flexors',
                    },
                ],
            },
        ],
    },
];
