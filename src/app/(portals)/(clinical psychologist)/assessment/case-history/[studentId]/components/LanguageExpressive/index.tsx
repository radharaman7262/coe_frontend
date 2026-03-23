'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitLanguageExpression } from './utils.api';

import { LANGUAGE_EXPRESSIVE_SCHEMA } from '../schemas/languageExpression.schema';

import styles from './styles.module.scss';


const LanguageExpressive = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitLanguageExpression,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: LANGUAGE_EXPRESSIVE_SCHEMA,
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
            dropdownClassName={styles.dropdown}
            schema={LANGUAGE_EXPRESSIVE_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default LanguageExpressive;
