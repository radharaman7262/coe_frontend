'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { FLUENCY_INFORMAL_FORMAL_TOOL_SCHEMA } from '../schemas/fluencyFormalInfomal.schema';

import { submitFormalInformalTools } from './utils.api';

const FluencyInformalFormalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFormalInformalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: FLUENCY_INFORMAL_FORMAL_TOOL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            btnLoader={loader}
            schema={FLUENCY_INFORMAL_FORMAL_TOOL_SCHEMA}
            formHook={formHook}
        />
    );
};

export default FluencyInformalFormalTools;
