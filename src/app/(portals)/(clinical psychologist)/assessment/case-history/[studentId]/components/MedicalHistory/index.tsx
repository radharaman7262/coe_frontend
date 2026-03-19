'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { MEDICAL_HISTORY_SCHEMA } from '../schemas/medicalhistory.schema';

import { submitMedicalHistory } from './utils.api';

import styles from '../../styles.module.scss';

const MedicalHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMedicalHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MEDICAL_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={MEDICAL_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default MedicalHistory;
