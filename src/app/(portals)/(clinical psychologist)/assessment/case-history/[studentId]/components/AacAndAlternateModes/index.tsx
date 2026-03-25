'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { ALTERNATE_MODE_SCHEMA } from '../schemas/alternateMode.schema';

import { submitAlternateModes } from './utils.api';

const AacAndAlternateModes = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitAlternateModes,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: ALTERNATE_MODE_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
    });

    return (
        <AutoForm
            schema={ALTERNATE_MODE_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default AacAndAlternateModes;