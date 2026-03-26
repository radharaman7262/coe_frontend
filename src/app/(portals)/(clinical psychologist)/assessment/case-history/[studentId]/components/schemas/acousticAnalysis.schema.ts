import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { MuscleStrengthFormKeys } from '../MuscleStrength/type';

export const ACOUSTIC_ANALYSIS_SCHEMA: FormSchemaField<MuscleStrengthFormKeys>[] = [
    {
        name: MuscleStrengthFormKeys.MUSCLE_STRENGTH,
        label: '',
        type: 'table',

        columns: [
            { key: 'label', label: 'Parameter' },
            {
                key: 'value',
                label: 'Value',
                type: 'text',
            },
            {
                key: 'comments',
                label: 'Norm Reference (age-appropriate)',
                type: 'text',
            },
        ],

        rows: [
            {
                section: 'Part-word repetitions ("b-b-ball")',
                sectionKey: 'data',
                items:[
                    { key: 'partWordRepetitions', label: 'Part-word repetitions ("b-b-ball")' },
                    { key: 'jitter', label: 'Jitter (%)' },
                    { key: 'shimmer', label: 'Shimmer (%)' },
                    { key: 'intensity', label: 'Intensity (dB)' },
                    { key: 'maximumPhonationTime', label: 'Maximum Phonation Time (MPT)' }
                ],
            },
        ],
    },
];
