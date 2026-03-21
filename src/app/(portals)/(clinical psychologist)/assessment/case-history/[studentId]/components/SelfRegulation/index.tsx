'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SELF_REGULATION_SCHEMA } from '../schemas/selfRegulation.schema';

import { submitSelfRegulation } from './utils.api';

import styles from './styles.module.scss';

const SelfRegulation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSelfRegulation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SELF_REGULATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={SELF_REGULATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default SelfRegulation;
