'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { VOICE_FORMAL_TOOLS_SCHEMA } from '../schemas/voiceFormTools';

import { VOICE_ASSESSMENT_TOOLS_OPTIONS } from './constant';

import { submitVoiceFormalTools } from './utils.api';

const VoiceFormalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitVoiceFormalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: VOICE_FORMAL_TOOLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            voiceSpeechAssessmentTools: VOICE_ASSESSMENT_TOOLS_OPTIONS,
        },
    });

    return <AutoForm schema={VOICE_FORMAL_TOOLS_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default VoiceFormalTools;
