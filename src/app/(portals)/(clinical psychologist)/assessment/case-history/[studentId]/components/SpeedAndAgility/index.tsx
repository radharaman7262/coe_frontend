'use client';

import { useState } from 'react';

import { AutoForm } from '@/components/shared/Forms/engine/AutoForm';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useAutoForm } from '@/hooks/useAutoForm';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSpeedAndAgility } from './utils.api';

import { SPEED_AND_AGILITY_SCHEMA } from '../schemas/speedAndAgility.schema';

import styles from './styles.module.scss';

const SpeedAndAgility = () => {
    const [loader, setLoader] = useState(false);

    const mutation = useAppMutation({
        mutationFn: submitSpeedAndAgility,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const formHook = useAutoForm({
        schema: SPEED_AND_AGILITY_SCHEMA,
        queryHook: useGetCaseHistoryFormDetails,
        mutation,
        // checkboxConfig: {
        //     selectedOptions: OPTIONS,
        // },
    });

    return (
        <AutoForm
            formGridClassName={styles['muscle-tone-form']}
            schema={SPEED_AND_AGILITY_SCHEMA}
            formHook={formHook}
            btnLoader={loader}
        />
    );
};

export default SpeedAndAgility;
