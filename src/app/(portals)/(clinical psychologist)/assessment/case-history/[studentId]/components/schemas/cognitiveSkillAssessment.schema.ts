import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { ReflexesFormKeys } from '../Reflexes/type';

export const COGNITIVE_SKILL_ASSESSMENT_SCHEMA: FormSchemaField<ReflexesFormKeys>[] = [
    {
        name: ReflexesFormKeys.REFLEXES,
        type: 'table',
        label: '',
        columns: [
            { key: 'label', label: 'Reflex Name(Expected Age)' },
            {
                key: 'status',
                label: 'Present/Absent',
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
            // 🔹 Primitive Reflexes
            {
                section: 'Domain : Attention',
                sectionKey: 'attention',
                items: [
                    {
                        key: 'moro',
                        label: 'Sustained Attention',
                        helperText: 'Expected At (0–6 months)',
                    },
                    { key: 'rooting', label: 'Selective Attention' },
                    { key: 'sucking', label: 'Shifting Attention' },
                    { key: 'palmarGrasp', label: 'Divided Attention' },
                ],
            },

            // 🔹 Postural & Righting Reactions
            {
                section: 'Domain : Memory',
                sectionKey: 'memory',
                items: [
                    { key: 'neckRighting', label: 'Short-Term Memory' },
                    { key: 'bodyRighting', label: 'Working Memory' },
                    { key: 'protectiveExtension', label: 'Long-Term Memory' },
                ],
            },

            // 🔹 Deep Tendon Reflexes
            {
                section: 'Domain : Thinking & Reasoning',
                sectionKey: 'thinking',
                items: [
                    { key: 'biceps', label: 'Cause and Effect Understanding' },
                    { key: 'triceps', label: 'Categorization' },
                    { key: 'patellar', label: 'Matching and Comparing' },
                    { key: 'achilles', label: 'Pattern Recognition' },
                    { key: 'babinski', label: 'Sequencing' },
                ],
            },
            {
                section: 'Domain : Executive Functions',
                sectionKey: 'executiveFunctions',
                items: [
                    { key: 'biceps', label: 'Impulse Control' },
                    { key: 'triceps', label: 'Planning and Organization' },
                    { key: 'patellar', label: 'Problem-Solving' },
                    { key: 'achilles', label: 'Goal-Directed Behavior' },
                    { key: 'babinski', label: 'Flexibility' },
                    { key: 'babinski', label: 'Inhibition' },
                    { key: 'babinski', label: 'Self-Monitoring' },
                ],
            },
            {
                section: 'Domain : Concept Formation',
                sectionKey: 'conceptFormation',
                items: [
                    { key: 'biceps', label: 'Object Identification' },
                    { key: 'triceps', label: 'Color / Shape / Size Concepts' },
                    { key: 'patellar', label: 'Number Concepts' },
                    { key: 'achilles', label: 'Time Concepts' },
                    { key: 'babinski', label: 'Money Concepts' },
                ],
            },
        ],
    },
];
