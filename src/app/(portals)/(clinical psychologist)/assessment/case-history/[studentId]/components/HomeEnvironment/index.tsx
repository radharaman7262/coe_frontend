'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { postNatalSchema } from '../schemas/postnatal.schema';

import { FAMILY_HISTORY_SCHEMA } from '../schemas/familyHistory.schema';

import { useSubmitFamilyHistory } from './mutation';

const PrenatalBirthHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitFamilyHistory({ setLoader });

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
            schema={FAMILY_HISTORY_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default PrenatalBirthHistory;
