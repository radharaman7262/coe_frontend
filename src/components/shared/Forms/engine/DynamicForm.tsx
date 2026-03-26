'use client';

import { FormSchemaField } from '../types/form.types';

import FormField, { TableValue } from './FormField';

import FormLayout from './FormLayout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DynamicFormProps<T extends string, V extends Record<T, any>> {
    schema: FormSchemaField<T>[];
    values: V;
    setValue: (key: T, value: string | number | boolean | string[] | TableValue) => void;
    onSubmit: () => void;
    loader: boolean;
    percentage: number;
    className?: string;
    formGridClassName?: string;
    tableRowClassName?: string;
    dropdownClassName?: string;
    labelContainerClassName?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicForm = <T extends string, V extends Record<T, any>>(props: DynamicFormProps<T, V>) => {
    const {
        schema,
        onSubmit,
        loader,
        percentage,
        values,
        setValue,
        className,
        formGridClassName,
        tableRowClassName,
        dropdownClassName,
        labelContainerClassName
    } = props;

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <FormLayout percentage={percentage ?? 0} onSubmit={handleSubmit} loader={loader}>
            {schema?.map((field) => {
                if (field.showWhen) {
                    const dependentValue = values[field.showWhen.field];

                    if (dependentValue !== field.showWhen.value) {
                        return null;
                    }
                }

                return (
                    <FormField
                        key={field.name}
                        field={field}
                        value={values[field.name]}
                        onChange={setValue}
                        className={className}
                        formGridClassName={formGridClassName}
                        tableRowClassName={tableRowClassName}
                        dropdownClassName={dropdownClassName}
                        labelContainerClassName={labelContainerClassName}
                    />
                );
            })}
        </FormLayout>
    );
};
export default DynamicForm;
