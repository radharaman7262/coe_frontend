'use client';

import { useState } from 'react';

import { QueryKeys } from '@/utils/queryKeys';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DEVELOPMENTAL_SELF_SKILLS_SCHEMA } from '../schemas/selfHelpSkills.schema';

import { submitSelfHelpDevelopment } from './utils.api';

import styles from '../../styles.module.scss';

const SelfHelpSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSelfHelpDevelopment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: DEVELOPMENTAL_SELF_SKILLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={DEVELOPMENTAL_SELF_SKILLS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default SelfHelpSkills;
