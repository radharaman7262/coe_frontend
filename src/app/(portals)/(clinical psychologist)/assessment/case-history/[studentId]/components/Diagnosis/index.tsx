'use client';

import { useState } from 'react';
import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DIAGNOSIS_SCHEMA } from '../schemas/diagnosis.schema';

import { submitDiagnosis } from './utils.api';

import styles from '../../styles.module.scss';

const Diagnosis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitDiagnosis,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DIAGNOSIS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={DIAGNOSIS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default Diagnosis;
