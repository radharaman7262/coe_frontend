'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { IN_HAND_MANIPULATION_SCHEMA } from '../schemas/inHandleManipulation.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitInHandManipulation } from './utils.api';

import styles from './styles.module.scss';

const InHandManipulation = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitInHandManipulation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: IN_HAND_MANIPULATION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={IN_HAND_MANIPULATION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default InHandManipulation;
