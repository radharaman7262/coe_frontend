'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { CLINICAL_IMPRESSION_SCHEMA } from '../schemas/clinicalImpression.schema';

import { submitClinicalImpression } from './utils.api';
import { FLUENCY_DIAGNOSIS_OPTIONS, FLUENCY_IMPACT_OPTIONS } from './constant';

const ClinicalImpression = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitClinicalImpression,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: CLINICAL_IMPRESSION_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig:{
            basedOnSpeechSample:FLUENCY_DIAGNOSIS_OPTIONS,
            fluencyDisorderImpact:FLUENCY_IMPACT_OPTIONS,
        }
    });

    return (
        <AutoForm
            schema={CLINICAL_IMPRESSION_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default ClinicalImpression;