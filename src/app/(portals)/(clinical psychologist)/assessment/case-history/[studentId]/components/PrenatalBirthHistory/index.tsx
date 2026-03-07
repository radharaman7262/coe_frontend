'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';

import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';
import { useSubmitPersonalBirthHistory } from './mutation';
import { prenatalSchema } from '../schemas/prenatal.schema';

const PrenatalBirthHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitPersonalBirthHistory({ setLoader });

    const percentage = useMemo(() => calculateCompletion(prenatalSchema, values), [values]);

    // console.log(values, 'percent');

    const handleSubmit = () => {
        mutate({
            ...values,
            studentId: 23,
            percentage,
        });
    };

    return (
        <DynamicForm
            values={values}
            setValue={setValue}
            percentage={percentage}
            schema={prenatalSchema}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default PrenatalBirthHistory;
