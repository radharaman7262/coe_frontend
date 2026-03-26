'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SSD_FORMAL_AND_INFORMAL_SCHEMA } from '../schemas/ssdFormalAndInformal.schema';

import { submitFormalAndInformalTools } from './utils.api';

import { FORMAL_TOOLS, SPEECH_SAMPLE_OPTIONS } from './constant';

const SSDFormalAndInformalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFormalAndInformalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SSD_FORMAL_AND_INFORMAL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            speechSamples: SPEECH_SAMPLE_OPTIONS,
            formalToolsUsed: FORMAL_TOOLS,
        },
    });

    return (
        <AutoForm btnLoader={loader} schema={SSD_FORMAL_AND_INFORMAL_SCHEMA} formHook={formHook} />
    );
};

export default SSDFormalAndInformalTools;
