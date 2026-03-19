'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { prenatalSchema } from '../schemas/prenatal.schema';

import { PREGNANCY_HEALTH_OPTIONS } from './constant';

import { submitPersonalBirthHistory } from './utils.api';

const PrenatalBirthHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitPersonalBirthHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: prenatalSchema,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            pregnancyHealth: PREGNANCY_HEALTH_OPTIONS,
        },
    });

    return <AutoForm btnLoader={loader} schema={prenatalSchema} formHook={formHook} />;
};

export default PrenatalBirthHistory;
