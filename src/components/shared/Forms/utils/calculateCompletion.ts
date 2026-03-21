import { FormSchemaField } from '../types/form.types';

export const calculateCompletion = <T extends string>(
    schema: FormSchemaField<T>[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: Record<T, any>,
): number => {
    let totalFields = 0;
    let filledFields = 0;

    schema.forEach((field) => {
        const isVisible = field.showWhen
            ? values[field.showWhen.field] === field.showWhen.value
            : true;

        if (!isVisible) return;

        const value = values[field.name];

        // 🔥 TABLE FIELD
        if (field.type === 'table') {
            const tableValue = (value as Record<string, Record<string, string | string[]>>) || {};

            field.rows.forEach((section) => {
                section.items.forEach((item) => {
                    totalFields += 1;

                    const row = tableValue[item.key] || {};

                    // 🔥 define what "filled" means
                    const isRowFilled = Object.values(row).some((v) =>
                        Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && v !== '',
                    );

                    if (isRowFilled) filledFields += 1;
                });
            });

            return;
        }

        // 🔥 NORMAL FIELD
        totalFields += 1;

        const isFilled =
            field.type === 'checkbox'
                ? Array.isArray(value) && value.length > 0
                : value !== undefined && value !== null && value !== '';

        if (isFilled) filledFields += 1;
    });

    if (totalFields === 0) return 0;

    return Math.round((filledFields / totalFields) * 100);
};
