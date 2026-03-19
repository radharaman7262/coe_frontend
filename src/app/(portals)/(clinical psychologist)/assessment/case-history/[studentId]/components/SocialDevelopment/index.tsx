'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { SOCIAL_DEVELOPMENT_SCHEMA } from '../schemas/socialDevelopment.schema';

import { submitSocialDevelopment } from './utils.api';

import styles from '../../styles.module.scss';

const SocialDevelopment = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSocialDevelopment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SOCIAL_DEVELOPMENT_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            className={styles.radioGroup}
            schema={SOCIAL_DEVELOPMENT_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default SocialDevelopment;
