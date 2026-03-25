import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { AerodynamicFormKeys } from '../AerodynamicAspects/type';

export const AERO_DYNAMIC_SCHEMA: FormSchemaField<AerodynamicFormKeys>[] = [
    {
        name: AerodynamicFormKeys.BREATH_SUPPORT,
        type: 'radio',
        label: 'Breath support',
        options: [
            { label: 'Abdominal', value: 'abdominal' },
            { label: 'Thoracic', value: 'thoracic' },
            { label: 'Clavicular', value: 'clavicular' },
        ],
    },
    {
        name: AerodynamicFormKeys.PHONATION_COORDINATION,
        type: 'radio',
        label: 'Phonation-respiration coordination',
        options: [
            { label: 'Efficient', value: 'efficient' },
            { label: 'Incoherent', value: 'incoherent' },
        ],
    },
    {
        name: AerodynamicFormKeys.MPT,
        type: 'text',
        label: 'MPT (Maximum Phonation Time)',
        placeholder: 'Enter here',
    },
    {
        name: AerodynamicFormKeys.SZ_RATIO,
        type: 'text',
        label: 's/z ratio',
        placeholder: 'Enter here',
    },
    {
        name: AerodynamicFormKeys.TENSION,
        type: 'radio',
        label: 'Tension / strain during phonation',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        name: AerodynamicFormKeys.BREATH_MISMATCH,
        type: 'radio',
        label: 'Tension / strain during phonation',
        options: [
            { label: 'Observed', value: 'observed' },
            { label: 'Not observed', value: 'not_observed' },
        ],
    },
];
