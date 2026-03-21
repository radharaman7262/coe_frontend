'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { COMMUNICATION_SKILLS_SCHEMA } from '../schemas/communicationSkills.schema';

import { submitCommunicationSkills } from './utils.api';

import { OPTIONS } from './constant';

const CommunicationSkills = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitCommunicationSkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: COMMUNICATION_SKILLS_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            general: OPTIONS,
        },
    });

    return <AutoForm schema={COMMUNICATION_SKILLS_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default CommunicationSkills;
