'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { GSL_FORMAL_TOOLS_SCHEMA } from '../schemas/gslFormalTools.schema';

import { submitGSLFormalTools } from './utils.api';

import styles from './styles.module.scss';

const GSLFormalTools = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitGSLFormalTools,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: GSL_FORMAL_TOOLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={GSL_FORMAL_TOOLS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
            formGridClassName={styles['muscle-tone-form']}
        />
    );
};

export default GSLFormalTools;
