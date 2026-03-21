'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { EMOTIONAL_AWARENESS_SCHEMA } from '../schemas/emotionalAwareness.schema';

import { submitEmotionalAndExpression } from './utils.api';

import styles from './styles.module.scss';

const EmotionalAwarenessAndExpression = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitEmotionalAndExpression,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: EMOTIONAL_AWARENESS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={EMOTIONAL_AWARENESS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default EmotionalAwarenessAndExpression;
