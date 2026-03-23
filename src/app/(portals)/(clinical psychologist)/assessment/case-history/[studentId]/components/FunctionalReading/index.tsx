'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitFunctionalReading } from './utils.api';

import { VISUAL_PERCEPTION_SCHEMA } from '../schemas/visualPerception.schema';

import styles from './styles.module.scss';

const FunctionalReading = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitFunctionalReading,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: VISUAL_PERCEPTION_SCHEMA,
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
            schema={VISUAL_PERCEPTION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default FunctionalReading;
