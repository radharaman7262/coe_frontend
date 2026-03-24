'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { HOME_ENVIRONMENT_SCHEMA } from '../schemas/homeEnvironment.schema';

import { submitHomeEnvironment } from './utils.api';

const HomeEnvironment = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitHomeEnvironment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: HOME_ENVIRONMENT_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return <AutoForm schema={HOME_ENVIRONMENT_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default HomeEnvironment;
