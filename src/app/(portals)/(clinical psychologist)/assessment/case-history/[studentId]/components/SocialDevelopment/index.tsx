'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { SOCIAL_DEVELOPMENT_SCHEMA } from '../schemas/socialDevelopment.schema';

import { useSubmitSocialDevelopment } from './mutation';

const SocialDevelopment = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitSocialDevelopment({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(SOCIAL_DEVELOPMENT_SCHEMA, values),
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
            schema={SOCIAL_DEVELOPMENT_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default SocialDevelopment;
