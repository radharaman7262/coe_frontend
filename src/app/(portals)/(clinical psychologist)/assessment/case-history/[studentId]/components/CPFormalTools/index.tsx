'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { CP_FORMAL_TOOLS_SCHEMA } from '../schemas/cpFormalTools.schema';

import { submitCPFormalTools } from './utils.api';

import styles from './styles.module.scss'

const CPFormalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitCPFormalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: CP_FORMAL_TOOLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={CP_FORMAL_TOOLS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
            formGridClassName={styles['muscle-tone-form']}
        />
    );
};

export default CPFormalTools;
