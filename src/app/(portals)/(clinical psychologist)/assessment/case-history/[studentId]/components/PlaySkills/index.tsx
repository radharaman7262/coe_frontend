'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitPlaySkills } from './utils.api';

import { PLAY_SKILLS_SCHEMA } from '../schemas/playSkills.schema';

import { OPTIONS } from './constant';

const PlaySkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitPlaySkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: PLAY_SKILLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={PLAY_SKILLS_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default PlaySkills;
