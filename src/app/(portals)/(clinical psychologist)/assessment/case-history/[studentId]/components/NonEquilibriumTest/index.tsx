'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitNonEquilibriumTest } from './utils.api';

import { NON_EQUILIBRIUM_SCHEMA } from '../schemas/NonEquilibriumTest';

import styles from './styles.module.scss';

const NonEquilibriumTest = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitNonEquilibriumTest,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: NON_EQUILIBRIUM_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            tableRowClassName={styles['table-row']}
            schema={NON_EQUILIBRIUM_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default NonEquilibriumTest;
