'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { TableAutoForm } from '@/components/shared/Forms/tableHeaderEngine/AutoSecondForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitReflexes } from './utils.api';

import { COGNITIVE_SKILL_ASSESSMENT_SCHEMA } from '../schemas/cognitiveSkillAssessment.schema';

import styles from './styles.module.scss';

const CognitiveSkillAssessment = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitReflexes,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: COGNITIVE_SKILL_ASSESSMENT_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <TableAutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={COGNITIVE_SKILL_ASSESSMENT_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default CognitiveSkillAssessment;
