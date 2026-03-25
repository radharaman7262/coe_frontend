'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { GSL_SENSORY_PROFILE_SCHEMA } from '../schemas/gslSensoryProfile.schema';

import { submitSensoryProfile } from './utils.api';

const GSLSensoryProfile = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSensoryProfile,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: GSL_SENSORY_PROFILE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={GSL_SENSORY_PROFILE_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default GSLSensoryProfile;
