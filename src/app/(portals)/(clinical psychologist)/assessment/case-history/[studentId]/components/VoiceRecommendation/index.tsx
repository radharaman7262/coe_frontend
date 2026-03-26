'use client';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { VOICE_RECOMMENDATION_SCHEMA } from '../schemas/voiceRecommendation.schema';

import { submitVoiceRecommendation } from './utils.api';

import { VOICE_THERAPY_OPTIONS } from './constant';

const VoiceRecommendation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitVoiceRecommendation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    const formHook = useAutoForm({
        schema: VOICE_RECOMMENDATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            therapies: VOICE_THERAPY_OPTIONS,
        },
        parnetFormId: id ?? '',
    });

    return <AutoForm schema={VOICE_RECOMMENDATION_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default VoiceRecommendation;
