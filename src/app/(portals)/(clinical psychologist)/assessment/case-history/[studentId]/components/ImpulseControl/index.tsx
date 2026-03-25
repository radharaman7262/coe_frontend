'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { IMPULSE_CONTROL_SCHEMA } from '../schemas/impulseControl.schema';

import { submitImpulseControl } from './utils.api';

const ImpulseControl = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitImpulseControl,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: IMPULSE_CONTROL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={IMPULSE_CONTROL_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default ImpulseControl;
