import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { VOICE_DIAGNOSTIC_IMPRESSION_OPTIONS } from '../VoiceDiagnosticImpression/constant';

import { VoiceDiagnosticFormKeys } from '../VoiceDiagnosticImpression/type';

export const VOICE_DIAGNOSTIC_IMPRESSION_SCHEMA: FormSchemaField<VoiceDiagnosticFormKeys>[] = [
    {
        name: VoiceDiagnosticFormKeys.VOICE_SPEECH_ASSESSMENT,
        type: 'checkbox',
        label: 'Voice Disorder Type',
        options: VOICE_DIAGNOSTIC_IMPRESSION_OPTIONS,
    },
];
