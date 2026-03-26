'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';
import { MUSCLE_TONE_SCHEMA } from '../schemas/muscleTone.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitMuscleTone } from './utils.api';

import styles from './styles.module.scss';

// import { OPTIONS } from './constant';

const MuscleTone = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMuscleTone,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MUSCLE_TONE_SCHEMA,
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
                    Modified Ashworth Scale (0, 1, 1+, 2, 3, 4)
                </Text>
            </div>
            <AutoForm
                formGridClassName={styles['muscle-tone-form']}
                schema={MUSCLE_TONE_SCHEMA}
                formHook={formHook}
                btnLoader={loader}
            />
        </>
    );
};

export default MuscleTone;
