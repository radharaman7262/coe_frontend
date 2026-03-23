'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitActivityOfDailyLiving } from './utils.api';

import { ADL_SCHEMA } from '../schemas/activityOfDailyLiving.schema';

import { OPTIONS } from './constant';

const ActivityOfDailyLiving = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitActivityOfDailyLiving,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: ADL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={ADL_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default ActivityOfDailyLiving;
