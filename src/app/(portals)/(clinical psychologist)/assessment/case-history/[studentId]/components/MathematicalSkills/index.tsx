'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { MATHEMATICAL_SKILLS_SCHEMA } from '../schemas/mathematicalSkills.schema';

import { submitMathematicalSkills } from './utils.api';

import styles from './styles.module.scss';

const MathematicalSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMathematicalSkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MATHEMATICAL_SKILLS_SCHEMA,
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
            schema={MATHEMATICAL_SKILLS_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default MathematicalSkills;
