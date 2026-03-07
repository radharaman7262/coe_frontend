'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { DIAGNOSIS_SCHEMA } from '../schemas/diagnosis.schema';

import { useSubmitDiagnosis } from './mutation';

const Diagnosis = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitDiagnosis({ setLoader });

    const percentage = useMemo(() => calculateCompletion(DIAGNOSIS_SCHEMA, values), [values]);

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
            schema={DIAGNOSIS_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default Diagnosis;
