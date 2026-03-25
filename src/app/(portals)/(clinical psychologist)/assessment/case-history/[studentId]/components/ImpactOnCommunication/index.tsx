'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { IMPACT_ON_COMMUNICATION_SCHEMA } from '../schemas/impactOnCommunication.schema';

import { submitImpactOnCommunication } from './utils.api';

const ImpactOnCommunication = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitImpactOnCommunication,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: IMPACT_ON_COMMUNICATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm schema={IMPACT_ON_COMMUNICATION_SCHEMA} formHook={formHook} btnLoader={loader} />
    );
};

export default ImpactOnCommunication;
