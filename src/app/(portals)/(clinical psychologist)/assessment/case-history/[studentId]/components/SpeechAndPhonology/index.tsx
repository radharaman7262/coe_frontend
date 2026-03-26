'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { SPEECH_AND_PHONOLOGY_SCHEMA } from '../schemas/speechAndPhonology.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSpeechPhonology } from './utils.api';

import {
    CAS_INDICATORS_OPTIONS,
    MOTOR_SPEECH_MARKER_OPTIONS,
    PHONOLOGICAL_PROCESS,
} from './constant';

const SpeechAndPhonology = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSpeechPhonology,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SPEECH_AND_PHONOLOGY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            phonologicalProcessesObserved: PHONOLOGICAL_PROCESS,
            motorSpeechMarkers: MOTOR_SPEECH_MARKER_OPTIONS,
            casIndicators: CAS_INDICATORS_OPTIONS,
        },
    });

    return <AutoForm btnLoader={loader} schema={SPEECH_AND_PHONOLOGY_SCHEMA} formHook={formHook} />;
};

export default SpeechAndPhonology;
