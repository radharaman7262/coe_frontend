import { FormSchemaField } from '../types/form.types';

export const calculateCompletion = <T extends string>(
    schema: FormSchemaField<T>[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: Record<T, any>,
): number => {
    let totalFields = 0;
    let filledFields = 0;

    schema.forEach((field) => {
        // 🔥 Check if field should be considered
        const isVisible = field.showWhen
            ? values[field.showWhen.field] === field.showWhen.value
            : true;

        if (!isVisible) return;

        totalFields += 1;

        const value = values[field.name];

        const isFilled =
            field.type === 'checkbox'
                ? Array.isArray(value) && value.length > 0
                : value !== undefined && value !== null && value !== '';

        if (isFilled) filledFields += 1;
    });

    if (totalFields === 0) return 0;

    return Math.round((filledFields / totalFields) * 100);
};
