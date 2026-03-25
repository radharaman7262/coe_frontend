'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitEquilibriumTest } from './utils.api';

import { EQUILIBRIUM_SCHEMA } from '../schemas/equilibrium.schema';

import styles from './styles.module.scss';

const EquilibriumTest = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitEquilibriumTest,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: EQUILIBRIUM_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            tableRowClassName={styles['table-row']}
            schema={EQUILIBRIUM_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default EquilibriumTest;
