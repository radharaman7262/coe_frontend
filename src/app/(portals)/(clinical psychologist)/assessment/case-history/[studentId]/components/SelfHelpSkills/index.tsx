'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { DEVELOPMENTAL_SELF_SKILLS_SCHEMA } from '../schemas/selfHelpSkills.schema';

import { useSubmitSelfHelpSkillsDevelopment } from './mutation';

const SelfHelpSkills = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitSelfHelpSkillsDevelopment({ setLoader });

    const percentage = useMemo(
        () => calculateCompletion(DEVELOPMENTAL_SELF_SKILLS_SCHEMA, values),
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
            schema={DEVELOPMENTAL_SELF_SKILLS_SCHEMA}
            onSubmit={handleSubmit}
            loader={loader}
        />
    );
};

export default SelfHelpSkills;
