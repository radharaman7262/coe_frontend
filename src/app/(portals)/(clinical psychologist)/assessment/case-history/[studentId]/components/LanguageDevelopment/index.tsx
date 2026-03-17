'use client';

import { useEffect, useMemo, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { ShimmerUiContainer } from '@/components/index';

import DynamicForm from '@/components/shared/Forms/engine/DynamicForm';
import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { mapApiToFormValues } from '@/utils/mapApiToFormValues';
import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DEVELOPMENT_LANGUAGE_SCHEMA } from '../schemas/languageDevelopment.schema';

import { submitLanguageDevelopment } from './utils.api';

import styles from '../../styles.module.scss';

const LanguageDevelopment = () => {
    const { values, setValue, setValues } = useFormState();

    const [loader, setLoader] = useState(false);

    const { mutate } = useAppMutation({
        mutationFn: submitLanguageDevelopment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');

    const { data, isLoading, isFetching } = useGetCaseHistoryFormDetails({
        studentId: studentId as string,
        formId: formId ?? '',
    });

    const { response } = data || {};

    const percentage = useMemo(
        () => calculateCompletion(DEVELOPMENT_LANGUAGE_SCHEMA, values),
        [values],
    );

    const handleSubmit = () => {
        mutate({
            ...values,
            studentId: studentId as string,
            percentage: percentage?.toString(),
        });
    };

    useEffect(() => {
        if (response?.length) {
            const mappedValues = mapApiToFormValues(DEVELOPMENT_LANGUAGE_SCHEMA, response[0]);
            setValues(mappedValues);
        }
    }, [response, setValues]);

    return isLoading || isFetching ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
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
