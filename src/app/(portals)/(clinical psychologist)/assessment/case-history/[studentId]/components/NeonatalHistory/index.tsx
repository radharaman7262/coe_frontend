'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { NEO_NATAL_HISTORY_SCHEMA } from '../schemas/neonatalHistory.schema';

import { submitNeoNatalHistory } from './utils.api';

import styles from './styles.module.scss';

const NeonatalHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitNeoNatalHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: NEO_NATAL_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={NEO_NATAL_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default NeonatalHistory;
