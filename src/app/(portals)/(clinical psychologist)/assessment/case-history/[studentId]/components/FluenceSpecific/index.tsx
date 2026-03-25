'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { FLUENCY_CASE_HISTORY_SCHEMA } from '../schemas/fluenceHistory.schema';

import { submitFluency } from './utils.api';

const FluenceSpecific = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFluency,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: FLUENCY_CASE_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={FLUENCY_CASE_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default FluenceSpecific;