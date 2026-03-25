'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSpeechAndArticulation } from './utils.api';

import { ARTICULATION_OPTIONS } from './constant';
import { SPEECH_ARTICULATION_SCHEMA } from '../schemas/speechAndArticulation.schema';

const SpeechAndArticulation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSpeechAndArticulation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SPEECH_ARTICULATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            articulationErrors: ARTICULATION_OPTIONS,
        },
    });

    return <AutoForm schema={SPEECH_ARTICULATION_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default SpeechAndArticulation;
