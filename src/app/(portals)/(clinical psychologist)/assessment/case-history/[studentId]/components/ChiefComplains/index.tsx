'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { CHIEF_COMPLAINT } from '../schemas/chiefComplaint.schema';

import { GENERAL_OBSERVATION_OPTION } from './constant';

import { submitChiefComplaints } from './utils.api';

const ChiefComplains = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitChiefComplaints,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: CHIEF_COMPLAINT,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        checkboxConfig:{
            generalObservation:GENERAL_OBSERVATION_OPTION
        }
    });

    return <AutoForm schema={CHIEF_COMPLAINT} formHook={formHook} btnLoader={loader} />;
};

export default ChiefComplains;
