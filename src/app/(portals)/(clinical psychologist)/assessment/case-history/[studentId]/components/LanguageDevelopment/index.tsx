'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DEVELOPMENT_LANGUAGE_SCHEMA } from '../schemas/languageDevelopment.schema';

import { submitLanguageDevelopment } from './utils.api';

import styles from '../../styles.module.scss';

const LanguageDevelopment = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitLanguageDevelopment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DEVELOPMENT_LANGUAGE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={DEVELOPMENT_LANGUAGE_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default LanguageDevelopment;
