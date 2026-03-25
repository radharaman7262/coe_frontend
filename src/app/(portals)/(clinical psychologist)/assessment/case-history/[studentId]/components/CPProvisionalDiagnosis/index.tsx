'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { CP_PROVISION_DIAGNOSIS_SCHEMA } from '../schemas/cpProvisional.schema';

import { submitProvisionDiagnosis } from './utils.api';

import styles from './styles.module.scss'

const CPProvisionalDiagnosis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitProvisionDiagnosis,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: CP_PROVISION_DIAGNOSIS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={CP_PROVISION_DIAGNOSIS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
            formGridClassName={styles['muscle-tone-form']}
        />
    );
};

export default CPProvisionalDiagnosis;
