'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { ACOUSTIC_ANALYSIS_SCHEMA } from '../schemas/acousticAnalysis.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitAcousticAnalysis } from './utils.api';

import styles from './styles.module.scss';

const AcousticAnalysis = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitAcousticAnalysis,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: ACOUSTIC_ANALYSIS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            tableRowClassName={styles['table-row']}
            labelContainerClassName={styles['label-container']}
            schema={ACOUSTIC_ANALYSIS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default AcousticAnalysis;
