'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { MEDICAL_HISTORY_SCHEMA } from '../schemas/medicalhistory.schema';

import { useSubmitMedicalHistory } from './mutation';

const MedicalHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitMedicalHistory({ setLoader });

    const percentage = useMemo(() => calculateCompletion(MEDICAL_HISTORY_SCHEMA, values), [values]);

    // console.log(values, 'percent');

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
            schema={MEDICAL_HISTORY_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default MedicalHistory;
