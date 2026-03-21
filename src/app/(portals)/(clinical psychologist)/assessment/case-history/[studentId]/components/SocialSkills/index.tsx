'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSocialSkills } from './utils.api';

import { SOCIAL_SKILLS_SCHEMA } from '../schemas/socialSkills.schema';

import { OPTIONS } from './constant';

const SocialSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSocialSkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SOCIAL_SKILLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={SOCIAL_SKILLS_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default SocialSkills;
