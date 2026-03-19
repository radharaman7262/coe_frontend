'use client';

import { useState } from 'react';
import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { submitPostNatalHistory } from './utils.api';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { postNatalSchema } from '../schemas/postnatal.schema';

import styles from './styles.module.scss';

const PostNatalHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitPostNatalHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: postNatalSchema,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={postNatalSchema}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default PostNatalHistory;
