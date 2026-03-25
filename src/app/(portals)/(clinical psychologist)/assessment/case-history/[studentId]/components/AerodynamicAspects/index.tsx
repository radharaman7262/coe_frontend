'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { AERO_DYNAMIC_SCHEMA } from '../schemas/aeroDynamic.schema';

import { submitAerodynamicAspects } from './utils.api';

const AerodynamicAspects = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitAerodynamicAspects,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: AERO_DYNAMIC_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={AERO_DYNAMIC_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default AerodynamicAspects;
