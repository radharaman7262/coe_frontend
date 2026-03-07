'use client';

import { FormSchemaField } from '../types/form.types';
import FormField from './FormField';

import FormLayout from './FormLayout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DynamicFormProps<T extends string, V extends Record<T, any>> {
    schema: FormSchemaField<T>[];
    values: V;
    setValue: (key: T, value: string | number | boolean | string[]) => void;
    onSubmit: () => void;
    loader: boolean;
    percentage: number;
    className?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicForm = <T extends string, V extends Record<T, any>>(props: DynamicFormProps<T, V>) => {
    const { schema, onSubmit, loader, percentage, values, setValue, className } = props;

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <FormLayout percentage={percentage} onSubmit={handleSubmit} loader={loader}>
            {schema?.map((field) => (
                <FormField
                    key={field.name}
                    field={field}
                    value={values[field.name]}
                    onChange={setValue}
                    className={className}
                />
            ))}
        </FormLayout>
    );
};
export default DynamicForm;
