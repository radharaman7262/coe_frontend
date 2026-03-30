import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { PerceptionAndVoiceFormKeys } from '../PerceptionAndVoiceAnalysis/type';

export const PERCEPTION_AND_VOICE_SCHEMA: FormSchemaField<PerceptionAndVoiceFormKeys>[] = [
    {
        name: PerceptionAndVoiceFormKeys.DIAGNOSIS,
        label: '',
        type: 'textArea',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
