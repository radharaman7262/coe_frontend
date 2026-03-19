'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SCHOLASTIC_HISTORY_SCHEMA } from '../schemas/scholasticHistory.schema';

import { submitScholasticHistory } from './utils.api';

import { OPTIONS } from './constant';

const ScholasticHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitScholasticHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SCHOLASTIC_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            reasonsForIrregularity: OPTIONS,
        },
    });

    return <AutoForm btnLoader={loader} schema={SCHOLASTIC_HISTORY_SCHEMA} formHook={formHook} />;
};

export default ScholasticHistory;
