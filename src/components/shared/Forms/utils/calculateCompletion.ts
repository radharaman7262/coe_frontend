import { FormSchemaField } from '../types/form.types';

export const calculateCompletion = <T extends string>(
    schema: FormSchemaField<T>[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: Record<T, any>,
): number => {
    const requiredFields = schema.filter((field) => field.required);

    const filledFields = requiredFields.filter((field) => {
        const key = field.name as T;
        const value = values[key];

        if (Array.isArray(value)) {
            return value.length > 0;
        }

        return value !== '' && value !== undefined && value !== null;
    });

    return Math.round((filledFields.length / requiredFields.length) * 100);
};
