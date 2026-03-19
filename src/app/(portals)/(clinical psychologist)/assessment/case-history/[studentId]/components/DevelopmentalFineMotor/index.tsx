'use client';

import { useState } from 'react';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DEVELOPMENTAL_FINE_MOTOR_SCHEMA } from '../schemas/developmentalFineMotor.schema';

import { submitDevelopmentFineMotorHistory } from './utils.api';

import styles from '../../styles.module.scss';

const DevelopmentalFineMotor = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitDevelopmentFineMotorHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DEVELOPMENTAL_FINE_MOTOR_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={DEVELOPMENTAL_FINE_MOTOR_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default DevelopmentalFineMotor;
