'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { FLUENCY_OBSERVATION_SCHEMA } from '../schemas/ObservationalFinding.schema';

import { submitObservationalFinding } from './utils.api';

const ObservationalFindings = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitObservationalFinding,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: FLUENCY_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={FLUENCY_OBSERVATION_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default ObservationalFindings;
