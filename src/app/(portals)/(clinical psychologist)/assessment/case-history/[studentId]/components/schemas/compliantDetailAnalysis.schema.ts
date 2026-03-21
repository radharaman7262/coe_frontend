import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { PhysicalObservationFormKeys } from '../CompliantDetailAnalysis/type';

export const PHYSICAL_OBSERVATION_SCHEMA: FormSchemaField<PhysicalObservationFormKeys>[] = [
    {
        name: PhysicalObservationFormKeys.GENERAL_APPEARANCE,
        label: 'General appearance',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
    {
        name: PhysicalObservationFormKeys.BEHAVIOR_PATTERN,
        label: 'Behavior pattern',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
    {
        name: PhysicalObservationFormKeys.ACTIVITY_LEVEL,
        label: 'Activity level',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
    {
        name: PhysicalObservationFormKeys.POSTURE,
        label: 'Posture',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
    {
        name: PhysicalObservationFormKeys.GAIT,
        label: 'Gait',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
    {
        name: PhysicalObservationFormKeys.DEFORMITY,
        label: 'Obvious tightness/contracture/deformity',
        type: 'text',
        placeholder: 'Enter here',
        required: false,
        options: [],
    },
];