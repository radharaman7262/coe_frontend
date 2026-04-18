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
                    { key: 'causeAndEffect', label: 'Cause and Effect Understanding' },
                    { key: 'categorization', label: 'Categorization' },
                    { key: 'matchingAndComparing', label: 'Matching and Comparing' },
                    { key: 'patternRecognization', label: 'Pattern Recognition' },
                    { key: 'sequencing', label: 'Sequencing' },
                ],
            },
            {
                section: 'Domain : Executive Functions',
                sectionKey: 'executiveFunctions',
                items: [
                    { key: 'impulseControl', label: 'Impulse Control' },
                    { key: 'planningAndOrganization', label: 'Planning and Organization' },
                    { key: 'problemSolving', label: 'Problem-Solving' },
                    { key: 'goalDirectedBehavior', label: 'Goal-Directed Behavior' },
                    { key: 'flexibilty', label: 'Flexibility' },
                    { key: 'inhibition', label: 'Inhibition' },
                    { key: 'selfMonitoring', label: 'Self-Monitoring' },
                ],
            },
            {
                section: 'Domain : Concept Formation',
                sectionKey: 'conceptFormation',
                items: [
                    { key: 'objectIdentification', label: 'Object Identification' },
                    { key: 'colorShape', label: 'Color / Shape / Size Concepts' },
                    { key: 'numberConcepts', label: 'Number Concepts' },
                    { key: 'timeConcepts', label: 'Time Concepts' },
                    { key: 'moneyConepts', label: 'Money Concepts' },
                ],
            },
        ],
    },
];
