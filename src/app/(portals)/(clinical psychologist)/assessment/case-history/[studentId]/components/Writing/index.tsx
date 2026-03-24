'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';
import ScoringCriteria from '@/components/shared/ScoringCriteria';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitWriting } from './utils.api';

import { WRITING_SCHEMA } from '../schemas/writing.schema';

import styles from './styles.module.scss';

const Writing = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitWriting,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: WRITING_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <>
            <ScoringCriteria
                criteria={[
                    '0-Not Applicable',
                    '1-Dependent',
                    '2-Physical Prompt',
                    '3-Verbal Prompt',
                    '4-Cue',
                    '5-Independent',
                ]}
            />
            <AutoForm
                formGridClassName={styles['muscle-tone-form']}
                tableRowClassName={styles['table-row']}
                dropdownClassName={styles.dropdown}
                schema={WRITING_SCHEMA}
                formHook={formHook}
                btnLoader={loader}
            />
        </>
    );
};

export default Writing;
