'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { SOCIAL_ENVIRONMENTAL_HISTORY } from '../schemas/socialEnvironmentalHistory.schema';

import { useSubmitSocialEnvironmentHistory } from './mutation';

const SocialAndEnvironmentHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitSocialEnvironmentHistory({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(SOCIAL_ENVIRONMENTAL_HISTORY, values),
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
            schema={SOCIAL_ENVIRONMENTAL_HISTORY}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default SocialAndEnvironmentHistory;
