'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { GRASP_DEVELOPMENT_SCHEMA } from '../schemas/graspDevelopment.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitGraspDevelopment } from './utils.api';

import styles from './styles.module.scss';

const GrossDevelopmentChecklist = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitGraspDevelopment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: GRASP_DEVELOPMENT_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={GRASP_DEVELOPMENT_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default GrossDevelopmentChecklist;
