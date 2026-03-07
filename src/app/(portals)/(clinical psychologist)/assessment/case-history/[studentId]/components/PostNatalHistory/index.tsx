'use client';

import { useMemo, useState } from 'react';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { postNatalSchema } from '../schemas/postnatal.schema';

import { useSubmitPostNatalHistory } from './mutation';

import styles from './styles.module.scss';

const PostNatalHistory = () => {
    const { values, setValue } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useSubmitPostNatalHistory({ setLoader });

    const percentage = useMemo(() => calculateCompletion(postNatalSchema, values), [values]);

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
            schema={postNatalSchema}
            onSubmit={handleSubmit}
            loader={loader}
            className={styles.radioGroup}
        />
    );
};

export default PostNatalHistory;
