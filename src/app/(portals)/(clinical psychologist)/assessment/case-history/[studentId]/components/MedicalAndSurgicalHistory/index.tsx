'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { MEDICAL_SURGICAL_HISTORY_SCHEMA } from '../schemas/medicaSurgery.schema';

import { submitMedicalSurgeryHistory } from './utils.api';

import { HEARING_OPTIONS } from './constant';

const MedicalAndSurgicalHistory = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitMedicalSurgeryHistory,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: MEDICAL_SURGICAL_HISTORY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig: {
            comorbidities: HEARING_OPTIONS,
        },
    });

    return (
        <AutoForm
            schema={MEDICAL_SURGICAL_HISTORY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default MedicalAndSurgicalHistory;