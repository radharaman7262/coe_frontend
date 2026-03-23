'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { MEDICAL_DEVELOPMENTAL_HISTORY_SCHEMA } from '../schemas/medicalDevelopmental.schema';

import { submitMedicalDevelopmentalHistory } from './utils.api';

import { OPTIONS } from './constant';

const MedicalDevelopmentalHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMedicalDevelopmentalHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MEDICAL_DEVELOPMENTAL_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            comorbidities: OPTIONS,
        },
    });

    return (
        <AutoForm
            schema={MEDICAL_DEVELOPMENTAL_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default MedicalDevelopmentalHistory;
