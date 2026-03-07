'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { PLAY_HISTORY_SCHEMA } from '../schemas/playHistory.schema';

import { useSubmitPlayHistory } from './mutation';

const PlayHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitPlayHistory({ setLoader });

    const percentage = useMemo(() => calculateCompletion(PLAY_HISTORY_SCHEMA, values), [values]);

    const handleSubmit = () => {
        mutate({
            ...values,
            studentId: 23,
            percentage: percentage?.toString(),
        });
    };

    return (
        <DynamicForm
            values={values}
            setValue={setValue}
            percentage={percentage}
            schema={PLAY_HISTORY_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default PlayHistory;
