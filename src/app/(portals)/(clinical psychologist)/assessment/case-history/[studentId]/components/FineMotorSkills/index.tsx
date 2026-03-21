'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitFineSkillsMotor } from './utils.api';

import { FINE_MOTOR_SCHEMA } from '../schemas/fineMotor.schema';

const FineMotorSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFineSkillsMotor,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: FINE_MOTOR_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            // formGridClassName={styles['muscle-tone-form']}
            schema={FINE_MOTOR_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default FineMotorSkills;
