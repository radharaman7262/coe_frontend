'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSchoolReadiness } from './utils.api';

import { SCHOOL_READINESS_SCHEMA } from '../schemas/schoolReadiness.schema';

import { OPTIONS } from './constant';

const SchoolReadiness = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSchoolReadiness,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SCHOOL_READINESS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={SCHOOL_READINESS_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default SchoolReadiness;
