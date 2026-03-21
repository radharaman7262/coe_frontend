'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { GROSS_MOTOR_SCHEMA } from '../schemas/grossMotor.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitGrossMotor } from './utils.api';

import { OPTIONS } from './constant';

const GrossMotor = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitGrossMotor,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: GROSS_MOTOR_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            selectedOptions: OPTIONS,
        },
    });

    return <AutoForm schema={GROSS_MOTOR_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default GrossMotor;