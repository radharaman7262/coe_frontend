'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { DEVELOPMENTAL_GROSS_MOTOR_SCHEMA } from '../schemas/developmentalHistory.schema';

import { useSubmitGrossMotorHistory } from './mutation';

const GrossMotorDevelopment = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitGrossMotorHistory({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(DEVELOPMENTAL_GROSS_MOTOR_SCHEMA, values),
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
            schema={DEVELOPMENTAL_GROSS_MOTOR_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default GrossMotorDevelopment;
