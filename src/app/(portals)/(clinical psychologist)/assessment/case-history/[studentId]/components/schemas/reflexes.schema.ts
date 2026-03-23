import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { ReflexesFormKeys } from '../Reflexes/type';

export const REFLEXES_SCHEMA: FormSchemaField<ReflexesFormKeys>[] = [
    {
        name: ReflexesFormKeys.REFLEXES,
        type: 'table',
        label: 'Reflexes',
        columns: [
            { key: 'label', label: 'Reflex Name' },
            {
                key: 'status',
                label: 'Integrated / Retained',
                type: 'select',
                options: [
                    { label: 'Integrated', value: 'integrated' },
                    { label: 'Retained', value: 'retained' },
                    { label: 'Not Tested', value: 'not_tested' },
                ],
            },
            {
                key: 'comments',
                label: 'Comments',
                type: 'text',
            },
        ],

        rows: [
            // 🔹 Primitive Reflexes
            {
                section: 'Primitive Reflexes',
                sectionKey: 'primitive',
                items: [
                    { key: 'moro', label: 'Moro Reflex' },
                    { key: 'rooting', label: 'Rooting Reflex' },
                    { key: 'sucking', label: 'Sucking Reflex' },
                    { key: 'palmarGrasp', label: 'Palmar Grasp Reflex' },
                    { key: 'plantarGrasp', label: 'Plantar Grasp Reflex' },
                    { key: 'atnr', label: 'Asymmetrical Tonic Neck Reflex (ATNR)' },
                    { key: 'stnr', label: 'Symmetrical Tonic Neck Reflex (STNR)' },
                    { key: 'tlr', label: 'Tonic Labyrinthine Reflex (TLR)' },
                    { key: 'landau', label: 'Landau Reflex' },
                ],
            },

            // 🔹 Postural & Righting Reactions
            {
                section: 'Postural & Righting Reactions',
                sectionKey: 'postural',
                items: [
                    { key: 'neckRighting', label: 'Neck Righting' },
                    { key: 'bodyRighting', label: 'Body Righting' },
                    { key: 'protectiveExtension', label: 'Protective Extension' },
                    { key: 'equilibrium', label: 'Equilibrium Reactions' },
                ],
            },

            // 🔹 Deep Tendon Reflexes
            {
                section: 'Deep Tendon Reflexes & Pathological Reflexes',
                sectionKey: 'deepTendon',
                items: [
                    { key: 'biceps', label: 'Biceps Reflex' },
                    { key: 'triceps', label: 'Triceps Reflex' },
                    { key: 'patellar', label: 'Patellar (Knee Jerk)' },
                    { key: 'achilles', label: 'Achilles Reflex' },
                    { key: 'babinski', label: 'Babinski Sign' },
                    { key: 'clonus', label: 'Clonus' },
                ],
            },
        ],
    },
];
