'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { DEVELOPMENTAL_GROSS_MOTOR_SCHEMA } from '../schemas/developmentalHistory.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitGrossMotorHistory } from './utils.api';

import styles from '../../styles.module.scss';

const GrossMotorDevelopment = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitGrossMotorHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DEVELOPMENTAL_GROSS_MOTOR_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={DEVELOPMENTAL_GROSS_MOTOR_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default GrossMotorDevelopment;
