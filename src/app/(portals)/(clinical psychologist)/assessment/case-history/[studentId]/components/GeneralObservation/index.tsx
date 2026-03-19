'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { GENERAL_OBSERVATION_SCHEMA } from '../schemas/generalObservation.schema';

import { submitGeneralObservation } from './utils.api';

import styles from '../../styles.module.scss';

const GeneralObservation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitGeneralObservation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: GENERAL_OBSERVATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={GENERAL_OBSERVATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default GeneralObservation;
