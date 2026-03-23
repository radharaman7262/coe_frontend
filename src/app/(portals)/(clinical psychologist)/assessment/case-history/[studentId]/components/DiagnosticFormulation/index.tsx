'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DIAGNOSTIC_FORMULATION_SCHEMA } from '../schemas/diagnositcFormualtion.schema';

import { submitDiagnosticFormulation } from './utils.api';

import styles from './styles.module.scss'

const DiagnosticFormulation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitDiagnosticFormulation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DIAGNOSTIC_FORMULATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={DIAGNOSTIC_FORMULATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default DiagnosticFormulation;
