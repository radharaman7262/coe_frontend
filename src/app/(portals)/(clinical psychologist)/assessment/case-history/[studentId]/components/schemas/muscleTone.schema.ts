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
                        label: '(Shoulder) Abductors',
                    },
                    {
                        key: 'shoulderAdductors',
                        label: '(Shoulder) Adductors',
                    },
                    {
                        key: 'shoulderFlexors',
                        label: '(Shoulder) Flexors',
                    },
                    {
                        key: 'shoulderExtensors',
                        label: '(Shoulder) Extensors',
                    },
                    {
                        key: 'shoulderInternalRotators',
                        label: '(Shoulder) Internal Rotators',
                    },
                    {
                        key: 'shoulderExternalRotators',
                        label: '(Shoulder) External Rotators',
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
                        label: '(Elbow) Flexors',
                    },
                    {
                        key: 'elbowExtensors',
                        label: '(Elbow) Extensors',
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
                        label: '(Wrist) Flexors',
                    },
                    {
                        key: 'wristExtensors',
                        label: '(Wrist) Extensors',
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
                        label: '(Finger) Flexors',
                    },
                    {
                        key: 'fingerExtensors',
                        label: '(Finger) Extensors',
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
                        label: '(Hip) Flexors (Iliopsoas)',
                    },
                    {
                        key: 'hipExtensors',
                        label: '(Hip) Extensors (Gluteus Maximus)',
                    },
                    {
                        key: 'hipAbductors',
                        label: '(Hip) Abductors (Gluteus Medius)',
                    },
                    {
                        key: 'hipAdductors',
                        label: '(Hip) Adductors',
                    },
                    {
                        key: 'hipInternalRotators',
                        label: '(Hip) Internal Rotators',
                    },
                    {
                        key: 'hipExternalRotators',
                        label: '(Hip) External Rotators',
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
                        label: '(Knee) Flexors (Hamstring)',
                    },
                    {
                        key: 'kneeExtensors',
                        label: '(Knee) Extensors (Quadriceps)',
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
                        label: '(Ankle) Dorsiflexors (Tibialis anterior)',
                    },
                    {
                        key: 'anklePlantarflexors',
                        label: '(Ankle) Plantarflexors (Gastrocnemius, Soleus)',
                    },
                    {
                        key: 'ankleInvertors',
                        label: '(Ankle) Invertors',
                    },
                    {
                        key: 'ankleEvertors',
                        label: '(Ankle) Evertors',
                    },
                ],
            },
        ],
    },
];
