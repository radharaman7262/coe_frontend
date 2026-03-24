'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';
import ScoringCriteria from '@/components/shared/ScoringCriteria';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { READING_SKILLS_SCHEMA } from '../schemas/readingSkills.schema';

import { submitReadingSkills } from './utils.api';

import styles from './styles.module.scss';

const ReadingSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitReadingSkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: READING_SKILLS_SCHEMA,
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
                schema={READING_SKILLS_SCHEMA}
                formHook={formHook}
                btnLoader={loader}
            />
        </>
    );
};

export default ReadingSkills;
