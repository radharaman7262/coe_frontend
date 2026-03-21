import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { OPTIONS } from '../CognitiveAndPerceptual/constant';

import { CognitiveAndPerceptualFormKeys } from '../CognitiveAndPerceptual/type';

export const COGNITIVE_PERCEPTUAL_SCHEMA: FormSchemaField<CognitiveAndPerceptualFormKeys>[] = [
    {
        name: CognitiveAndPerceptualFormKeys.SELECTED_OPTIONS,
        type: 'checkbox',
        label: 'General',
        options: OPTIONS,
    },
];
