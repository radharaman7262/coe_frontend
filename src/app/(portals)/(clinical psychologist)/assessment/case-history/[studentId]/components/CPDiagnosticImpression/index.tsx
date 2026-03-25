'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { CP_DIAGNOSTIC_IMPRESSION_SCHEMA } from '../schemas/cpDiagnosticImpression.schema';

import { submitDiagnosticImpression } from './utils.api';

const CPDiagnosticImpression = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitDiagnosticImpression,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: CP_DIAGNOSTIC_IMPRESSION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm btnLoader={loader} schema={CP_DIAGNOSTIC_IMPRESSION_SCHEMA} formHook={formHook} />
    );
};

export default CPDiagnosticImpression;
