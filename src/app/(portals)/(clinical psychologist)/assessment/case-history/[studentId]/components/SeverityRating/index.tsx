'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SEVERITY_RATING_SCHEMA } from '../schemas/severityRating.schema';

import { submitSeverityRating } from './utils.api';

const SeverityRating = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSeverityRating,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SEVERITY_RATING_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm btnLoader={loader} schema={SEVERITY_RATING_SCHEMA} formHook={formHook} />
    );
};

export default SeverityRating;