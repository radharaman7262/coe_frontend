'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { PHYSICAL_OBSERVATION_SCHEMA } from '../schemas/compliantDetailAnalysis.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitCompliantDetailAnalysis } from './utils.api';

const CompliantDetailAnalysis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitCompliantDetailAnalysis,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: PHYSICAL_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={PHYSICAL_OBSERVATION_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default CompliantDetailAnalysis;
