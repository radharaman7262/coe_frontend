'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

// import { BEHAVIORAL_OBSERVATION_SCHEMA } from '../schemas/behavioral.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitBehavioralObservation } from './utils.api';

import {
    EYE_CONTACT_OPTIONS,
    ALERTNESS,
    ATTENTION,
    IMITATION,
    SENSORY_BEHAVIOR,
    SITTING_TOLERANCE,
    TRANSITIONS,
    EMOTIONAL,
} from './constant';

import { BEHAVIORAL_OBSERVATION_SCHEMA } from '../schemas/behavioral.schema';

const BehavioralObservation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitBehavioralObservation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: BEHAVIORAL_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            alertness: ALERTNESS,
            eyeContact: EYE_CONTACT_OPTIONS,
            jointAttention: ATTENTION,
            imitation: IMITATION,
            sittingTolerance: SITTING_TOLERANCE,
            sensoryBehaviors: SENSORY_BEHAVIOR,
            transitions: TRANSITIONS,
            emotionalRegulation: EMOTIONAL,
        },
    });

    return (
        <AutoForm schema={BEHAVIORAL_OBSERVATION_SCHEMA} formHook={formHook} btnLoader={loader} />
    );
};

export default BehavioralObservation;
