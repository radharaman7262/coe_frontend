'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { PERCEPTION_AND_VOICE_SCHEMA } from '../schemas/perceptionAndVoiceAnalysis';

import { submitPerceptionAndVoice } from './utils.api';

import styles from './styles.module.scss';

const PerceptionAndVoiceAnalysis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitPerceptionAndVoice,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: PERCEPTION_AND_VOICE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            btnLoader={loader}
            schema={PERCEPTION_AND_VOICE_SCHEMA}
            formHook={formHook}
        />
    );
};

export default PerceptionAndVoiceAnalysis;
