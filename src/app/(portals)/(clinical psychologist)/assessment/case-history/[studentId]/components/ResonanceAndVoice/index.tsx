'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitResonanceAndVoice } from './utils.api';

import { RESONANCE_OPTIONS } from './constant';

import { RESONANCE_AND_VOICE_SCHEMA } from '../schemas/resonanceAndVoice.schema';

const ResonanceAndVoice = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitResonanceAndVoice,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: RESONANCE_AND_VOICE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            typeOfResonance: RESONANCE_OPTIONS,
        },
    });

    return (
        <AutoForm
            schema={RESONANCE_AND_VOICE_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default ResonanceAndVoice;