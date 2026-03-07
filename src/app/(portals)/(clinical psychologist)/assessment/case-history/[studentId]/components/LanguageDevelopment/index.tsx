'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { DEVELOPMENT_LANGUAGE_SCHEMA } from '../schemas/languageDevelopment.schema';

import { useSubmitLanguageDevelopmental } from './mutation';

const LanguageDevelopment = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitLanguageDevelopmental({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(DEVELOPMENT_LANGUAGE_SCHEMA, values),
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
            schema={DEVELOPMENT_LANGUAGE_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default LanguageDevelopment;
