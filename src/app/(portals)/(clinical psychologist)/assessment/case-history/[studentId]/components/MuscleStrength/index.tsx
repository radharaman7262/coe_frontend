'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { MUSCLE_STRENGTH_SCHEMA } from '../schemas/muscleStrength.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitMuscleStrength } from './utils.api';

import styles from './styles.module.scss';


const MuscleStrength = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMuscleStrength,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MUSCLE_STRENGTH_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={MUSCLE_STRENGTH_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default MuscleStrength;
