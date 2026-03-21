'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitAssistiveDevice } from './utils.api';

import { ASSISTIVE_DEVICES_SCHEMA } from '../schemas/assistiveDevice.schema';

import { OPTIONS } from './constant';

const AssisstiveDevice = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitAssistiveDevice,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: ASSISTIVE_DEVICES_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={ASSISTIVE_DEVICES_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default AssisstiveDevice;
