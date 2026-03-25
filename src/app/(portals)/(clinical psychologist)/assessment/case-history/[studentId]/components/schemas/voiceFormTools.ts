import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { VOICE_ASSESSMENT_TOOLS_OPTIONS } from '../VoiceFormalTools/constant';

import { VoiceFormalToolFormKeys } from '../VoiceFormalTools/type';

export const VOICE_FORMAL_TOOLS_SCHEMA: FormSchemaField<VoiceFormalToolFormKeys>[] = [
    {
        name: VoiceFormalToolFormKeys.VOICE_SPEECH_ASSESSMENT,
        type: 'checkbox',
        label: 'Voice & Speech Assessment Tools',
        options: VOICE_ASSESSMENT_TOOLS_OPTIONS,
    },
];
