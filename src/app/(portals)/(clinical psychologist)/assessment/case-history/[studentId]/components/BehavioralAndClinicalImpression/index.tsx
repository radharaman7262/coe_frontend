'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { VOICE_BEHAVIORAL_OBSERVATION_SCHEMA } from '../schemas/behavioralAndClinicalImpression';

import { submitBehaviorAndClinicalImpression } from './utils.api';

const BehavioralAndClinicalImpression = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitBehaviorAndClinicalImpression,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: VOICE_BEHAVIORAL_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={VOICE_BEHAVIORAL_OBSERVATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default BehavioralAndClinicalImpression;