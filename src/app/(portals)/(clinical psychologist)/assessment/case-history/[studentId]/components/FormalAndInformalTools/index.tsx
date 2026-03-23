'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { FORMAL_AND_INFORMAL_TOOL_SCHEMA } from '../schemas/formalAndInformalTools.schema';

import { submitFormalAndInformal } from './utils.api';

const FormalAndInformalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFormalAndInformal,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: FORMAL_AND_INFORMAL_TOOL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm btnLoader={loader} schema={FORMAL_AND_INFORMAL_TOOL_SCHEMA} formHook={formHook} />
    );
};

export default FormalAndInformalTools;
