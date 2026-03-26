/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShimmerUiContainer, Toaster } from '@/components/index';

import DynamicForm from './DynamicForm';

import { FormSchemaField } from '../types/form.types';

import styles from '../styles.module.scss';

export interface AutoFormProps<T extends string> {
    schema: FormSchemaField<T>[];
    formHook: {
        values: Record<string, any>;
        setValue: (name: string, value: any) => void;
        handleSubmit: () => void;
        isLoading: boolean;
        isFetching: boolean;
        percentage: number;
    };
    btnLoader: boolean;
    className?: string;
    formGridClassName?: string;
    tableRowClassName?: string;
    dropdownClassName?: string;
    labelContainerClassName?: string;
}

export const AutoForm = <T extends string>(props: AutoFormProps<T>) => {
    const {
        schema,
        formHook,
        className,
        btnLoader,
        formGridClassName,
        tableRowClassName,
        dropdownClassName,
        labelContainerClassName
    } = props;

    const { values, setValue, handleSubmit, isLoading, isFetching, percentage } = formHook;

    if (isLoading || isFetching) {
        return <ShimmerUiContainer className={styles.shimmer} />;
    }

    return (
        <>
            <DynamicForm
                values={values}
                setValue={setValue}
                schema={schema}
                onSubmit={handleSubmit}
                loader={btnLoader}
                percentage={percentage}
                className={className}
                formGridClassName={formGridClassName}
                tableRowClassName={tableRowClassName}
                dropdownClassName={dropdownClassName}
                labelContainerClassName={labelContainerClassName}
            />
            <Toaster />
        </>
    );
};
