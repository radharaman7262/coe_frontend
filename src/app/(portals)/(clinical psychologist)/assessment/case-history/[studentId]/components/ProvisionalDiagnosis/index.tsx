'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { PROVISION_DIAGNOSIS_SCHEMA } from '../schemas/provisionDiagnosis.schema';

import { submitProvisionDiagnosis } from './utils.api';

import styles from './styles.module.scss'

const ProvisionalDiagnosis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitProvisionDiagnosis,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: PROVISION_DIAGNOSIS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={PROVISION_DIAGNOSIS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
            formGridClassName={styles['muscle-tone-form']}
        />
    );
};

export default ProvisionalDiagnosis;
