'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { TableAutoForm } from '@/components/shared/Forms/tableHeaderEngine/AutoSecondForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitReflexes } from './utils.api';

import { REFLEXES_SCHEMA } from '../schemas/reflexes.schema';

import styles from './styles.module.scss';

const Reflexes = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitReflexes,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: REFLEXES_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <TableAutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={REFLEXES_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default Reflexes;
