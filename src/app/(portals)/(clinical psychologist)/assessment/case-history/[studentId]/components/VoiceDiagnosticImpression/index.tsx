'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { VOICE_DIAGNOSTIC_IMPRESSION_SCHEMA } from '../schemas/voiceDiagnosticImpression.schema';

import { VOICE_DIAGNOSTIC_IMPRESSION_OPTIONS } from './constant';

import { submitVoiceFormalTools } from './utils.api';

const VoiceDiagnosticImpression = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitVoiceFormalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: VOICE_DIAGNOSTIC_IMPRESSION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            voiceDisorderType: VOICE_DIAGNOSTIC_IMPRESSION_OPTIONS,
        },
    });

    return (
        <AutoForm
            schema={VOICE_DIAGNOSTIC_IMPRESSION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default VoiceDiagnosticImpression;
