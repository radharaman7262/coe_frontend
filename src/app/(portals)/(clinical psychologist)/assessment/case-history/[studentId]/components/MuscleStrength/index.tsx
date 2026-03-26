'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { Text } from '@/components/index';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { FontType } from '@/types/typographyCommon';
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
        <>
            <div className={styles['bg-header-title']}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='primary-cta'>
                    Muscle Strength: Manual Muscle Testing Rating Scale
                </Text>
                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='text-gray-900'
                >
                    0 = No contraction | 1 = Trace | 2 = Poor | 3 = Fair | 4 = Good | 5 = Normal
                </Text>
            </div>
            <AutoForm
                formGridClassName={styles['muscle-tone-form']}
                schema={MUSCLE_STRENGTH_SCHEMA}
                formHook={formHook}
                btnLoader={loader}
            />
        </>
    );
};

export default MuscleStrength;
