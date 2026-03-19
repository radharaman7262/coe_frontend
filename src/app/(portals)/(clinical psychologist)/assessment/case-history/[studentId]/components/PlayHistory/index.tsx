'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { PLAY_HISTORY_SCHEMA } from '../schemas/playHistory.schema';

import { submitPlayHistory } from './utils.api';

import styles from '../../styles.module.scss';

const PlayHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitPlayHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: PLAY_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={PLAY_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default PlayHistory;
