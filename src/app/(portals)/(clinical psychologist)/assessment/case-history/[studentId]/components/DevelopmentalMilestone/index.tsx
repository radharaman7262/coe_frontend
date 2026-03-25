'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DEVELOPMENTAL_MILESTONE_SCHEMA } from '../schemas/developmental.schema';

import { submitDevelopmentalMilestone } from './utils.api';

const DevelopmentalMilestone = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitDevelopmentalMilestone,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DEVELOPMENTAL_MILESTONE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
       
    });

    return <AutoForm btnLoader={loader} schema={DEVELOPMENTAL_MILESTONE_SCHEMA} formHook={formHook} />;
};

export default DevelopmentalMilestone;
