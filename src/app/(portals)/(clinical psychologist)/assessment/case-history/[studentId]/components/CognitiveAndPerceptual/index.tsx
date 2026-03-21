'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { COGNITIVE_PERCEPTUAL_SCHEMA } from '../schemas/cognitiveAndPerceptual.schema';

import { submitCognitiveAndPerceptualSkills } from './utils.api';

import { OPTIONS } from './constant';

const CognitiveAndPerceptual = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitCognitiveAndPerceptualSkills,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: COGNITIVE_PERCEPTUAL_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            selectedOptions: OPTIONS,
        },
    });

    return <AutoForm schema={COGNITIVE_PERCEPTUAL_SCHEMA} formHook={formHook} btnLoader={loader} />;
};

export default CognitiveAndPerceptual;
