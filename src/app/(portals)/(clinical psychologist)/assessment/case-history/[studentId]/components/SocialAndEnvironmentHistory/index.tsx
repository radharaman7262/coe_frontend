'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SOCIAL_ENVIRONMENTAL_HISTORY } from '../schemas/socialEnvironmentalHistory.schema';

import { submitSocialEnvironmentHistory } from './utils.api';

import styles from '../../styles.module.scss';

const SocialAndEnvironmentHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSocialEnvironmentHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SOCIAL_ENVIRONMENTAL_HISTORY,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={SOCIAL_ENVIRONMENTAL_HISTORY}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default SocialAndEnvironmentHistory;
