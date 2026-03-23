'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { BEHAVIORAL_OBSERVATION_SCHEMA } from '../schemas/behavioral.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitBehavioralObservation } from './utils.api';

import styles from './styles.module.scss';

const BehavioralObservation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitBehavioralObservation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: BEHAVIORAL_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            tableRowClassName={styles['table-row']}
            schema={BEHAVIORAL_OBSERVATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default BehavioralObservation;