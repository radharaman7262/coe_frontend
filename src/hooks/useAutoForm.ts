/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import { useFormState } from '@/components/shared/Forms/hooks/useFormState';
import { calculateCompletion } from '@/components/shared/Forms/utils/calculateCompletion';

import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { mapApiToFormValues } from '@/utils/mapApiToFormValues';
import { mapCheckboxArrayToObject } from '@/utils/mapCheckboxArrayToObject';

import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { mapTableToApi } from '@/utils/mapTableToApiPayload';

export interface FormProps<T extends string> {
    schema: FormSchemaField<T>[];
    mutation: UseMutationResult<
        any,
        Error,
        Record<string, string | number | Record<string, string>>,
        void
    >;
    queryHook: (args: { studentId: string; formId: string }) => UseQueryResult<any, Error>;
    checkboxConfig?: any;
}

export const useAutoForm = <T extends string>(props: FormProps<T>) => {
    const { schema, queryHook, mutation, checkboxConfig = {} } = props;

    const { values, setValue, setValues } = useFormState();

    const { studentId }: { studentId: string } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');

    const { data, isLoading, isFetching } = queryHook({
        studentId,
        formId: formId ?? '',
    });

    const { response } = data || {};

    const percentage = useMemo(() => calculateCompletion(schema, values), [values, schema]);

    // 🔁 API → FORM
    useEffect(() => {
        if (response?.length) {
            const mapped = mapApiToFormValues(schema, response[0]);

            setValues(mapped);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    // 🚀 SUBMIT
    const handleSubmit = () => {
        let finalValues = { ...values };

        // handle checkbox array → object
        Object.keys(checkboxConfig).forEach((key) => {
            finalValues[key] = mapCheckboxArrayToObject(values[key] || [], checkboxConfig[key]);
        });

        schema.forEach((field) => {
            if (field.type === 'table') {
                const tablePayload = mapTableToApi(values[field.name], [field]);
                // merge into root
                finalValues = {
                    ...finalValues,
                    ...tablePayload,
                };

                // remove flat table value
                delete finalValues[field.name];
            }
        });

        mutation.mutate({
            ...finalValues,
            studentId,
            percentage,
        });
    };

    return {
        values,
        setValue,
        handleSubmit,
        isLoading,
        isFetching,
        percentage,
    };
};
