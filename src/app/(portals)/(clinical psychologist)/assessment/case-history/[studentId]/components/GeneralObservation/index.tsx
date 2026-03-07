'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { GENERAL_OBSERVATION_SCHEMA } from '../schemas/generalObservation.schema';

import { useSubmitGeneralObservation } from './mutation';

const GeneralObservation = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitGeneralObservation({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(GENERAL_OBSERVATION_SCHEMA, values),
        [values],
    );

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
            schema={GENERAL_OBSERVATION_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default GeneralObservation;
