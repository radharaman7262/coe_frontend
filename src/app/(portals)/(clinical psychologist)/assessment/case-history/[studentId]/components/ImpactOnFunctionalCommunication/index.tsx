'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { EMOTIONAL_RECOMMENDATION_SCHEMA } from '../schemas/impactOn.schema';

import { submitRecommendation } from './utils.api';

import { EMOTIONAL_SOCIAL_IMPACT_OPTIONS } from './constant';

const ImpactOnFunctionalCommunication = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitRecommendation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: EMOTIONAL_RECOMMENDATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            emotionalSocialImpact: EMOTIONAL_SOCIAL_IMPACT_OPTIONS,
        },
    });

    return (
        <AutoForm btnLoader={loader} schema={EMOTIONAL_RECOMMENDATION_SCHEMA} formHook={formHook} />
    );
};

export default ImpactOnFunctionalCommunication;