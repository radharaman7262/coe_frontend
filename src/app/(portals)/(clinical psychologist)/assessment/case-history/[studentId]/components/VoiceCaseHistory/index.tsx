'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { VOICE_CASE_HISTORY_SCHEMA } from '../schemas/voiceCaseHistory.schema';

import { submitVoiceCaseHistory } from './utils.api';

const VoiceCaseHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitVoiceCaseHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: VOICE_CASE_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
       
    });

    return (
        <AutoForm
            schema={VOICE_CASE_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default VoiceCaseHistory;