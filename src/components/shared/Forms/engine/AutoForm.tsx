/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShimmerUiContainer, Toaster } from '@/components/index';

import DynamicForm from './DynamicForm';

import { FormSchemaField } from '../types/form.types';

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
}

export const AutoForm = <T extends string>(props: AutoFormProps<T>) => {
    const { schema, formHook, className, btnLoader } = props;

    const { values, setValue, handleSubmit, isLoading, isFetching, percentage } = formHook;

    if (isLoading || isFetching) {
        return <ShimmerUiContainer />;
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
            />
            <Toaster />
        </>
    );
};
