'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { postNatalSchema } from '../schemas/postnatal.schema';

import { DEVELOPMENTAL_FINE_MOTOR_SCHEMA } from '../schemas/developmentalFineMotor.schema';

import { useSubmitDevelopmentalFinal } from './mutation';

const DevelopmentalFineMotor = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitDevelopmentalFinal({ setLoader });

    const percentage = useMemo(() => calculateCompletion(postNatalSchema, values), [values]);

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
            schema={DEVELOPMENTAL_FINE_MOTOR_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default DevelopmentalFineMotor;
