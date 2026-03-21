import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { MuscleToneFormKeys } from '../MuscleTone/type';

export const MUSCLE_TONE_SCHEMA: FormSchemaField<MuscleToneFormKeys>[] = [
    {
        name: MuscleToneFormKeys.MUSCLE_TONE,
        label: '',
        // subLabel: 'Modified Ashworth Scale (0, 1, 1+, 2, 3, 4)',
        type: 'table',

        columns: [
            {
                key: 'label',
                label: '',
            },
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
                label: 'Comment',
                type: 'text',
            },
        ],

        rows: [
            // 🔹 Shoulder
            {
                section: 'Shoulder',
                sectionKey: 'shoulder',
                items: [
                    {
                        key: 'shoulderAbductors',
                        label: 'Abductors',
                    },
                    {
                        key: 'shoulderAdductors',
                        label: 'Adductors',
                    },
                    {
                        key: 'shoulderFlexors',
                        label: 'Flexors',
                    },
                    {
                        key: 'shoulderExtensors',
                        label: 'Extensors',
                    },
                    {
                        key: 'shoulderInternalRotators',
                        label: 'Internal Rotators',
                    },
                    {
                        key: 'shoulderExternalRotators',
                        label: 'External Rotators',
                    },
                ],
            },

            // 🔹 Elbow
            {
                section: 'Elbow',
                sectionKey: 'elbow',
                items: [
                    {
                        key: 'elbowFlexors',
                        label: 'Flexors',
                    },
                    {
                        key: 'elbowExtensors',
                        label: 'Extensors',
                    },
                ],
            },

            // 🔹 Wrist
            {
                section: 'Wrist',
                sectionKey: 'wrist',
                items: [
                    {
                        key: 'wristFlexors',
                        label: 'Flexors',
                    },
                    {
                        key: 'wristExtensors',
                        label: 'Extensors',
                    },
                ],
            },

            // 🔹 Fingers
            {
                section: 'Fingers',
                sectionKey: 'finger',
                items: [
                    {
                        key: 'fingerFlexors',
                        label: 'Flexors',
                    },
                    {
                        key: 'fingerExtensors',
                        label: 'Extensors',
                    },
                ],
            },

            // 🔹 Hip (FIXED KEYS)
            {
                section: 'Hip',
                sectionKey: 'hip',
                items: [
                    {
                        key: 'hipFlexors',
                        label: 'Flexors (Iliopsoas)',
                    },
                    {
                        key: 'hipExtensors',
                        label: 'Extensors (Gluteus Maximus)',
                    },
                    {
                        key: 'hipAbductors',
                        label: 'Abductors (Gluteus Medius)',
                    },
                    {
                        key: 'hipAdductors',
                        label: 'Adductors',
                    },
                    {
                        key: 'hipInternalRotators',
                        label: 'Internal Rotators',
                    },
                    {
                        key: 'hipExternalRotators',
                        label: 'External Rotators',
                    },
                ],
            },

            // 🔹 Knee (FIXED KEYS)
            {
                section: 'Knee',
                sectionKey: 'knee',
                items: [
                    {
                        key: 'kneeFlexors',
                        label: 'Flexors (Hamstring)',
                    },
                    {
                        key: 'kneeExtensors',
                        label: 'Extensors (Quadriceps)',
                    },
                ],
            },

            // 🔹 Ankle (FIXED KEYS)
            {
                section: 'Ankle',
                sectionKey: 'ankle',
                items: [
                    {
                        key: 'ankleDorsiflexors',
                        label: 'Dorsiflexors (Tibialis anterior)',
                    },
                    {
                        key: 'anklePlantarflexors',
                        label: 'Plantarflexors (Gastrocnemius, Soleus)',
                    },
                    {
                        key: 'ankleInvertors',
                        label: 'Invertors',
                    },
                    {
                        key: 'ankleEvertors',
                        label: 'Evertors',
                    },
                ],
            },
        ],
    },
];
