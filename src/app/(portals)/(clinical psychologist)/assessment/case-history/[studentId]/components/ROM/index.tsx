'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { ROM_SCHEMA } from '../schemas/romTable.schema';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitROM } from './utils.api';

import styles from './styles.module.scss';

const ROM = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitROM,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: ROM_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <>
            <div className={styles['bg-header-title']}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='primary-cta'>
                    ROM
                </Text>
                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='text-gray-900'
                >
                    WNL = Within Normal Limits, L = Limited (Reduced range noted), Comments = Record
                    asymmetry, tone, pain, compensations, etc.
                </Text>
            </div>

            <AutoForm
                formGridClassName={styles['muscle-tone-form']}
                schema={ROM_SCHEMA}
                formHook={formHook}
                btnLoader={loader}
            />
        </>
    );
};

export default ROM;
