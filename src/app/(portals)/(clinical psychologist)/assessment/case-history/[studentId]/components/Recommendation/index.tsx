'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { RECOMMENDATION_SCHEMA } from '../schemas/recommendation.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitRecommendation } from './utils.api';

import { OPTIONS } from './constant';

const Recommendation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitRecommendation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: RECOMMENDATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            therapies: OPTIONS,
        },
    });

    return <AutoForm btnLoader={loader} schema={RECOMMENDATION_SCHEMA} formHook={formHook} />;
};

export default Recommendation;
