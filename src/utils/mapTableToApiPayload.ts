/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { buildKeyMapFromSchema } from './buildKeyMapFromSchema';

export const mapTableToApi = <T extends string>(
    tableValue: Record<string, any>,
    schema: FormSchemaField<T>[],
) => {
    const keyMap = buildKeyMapFromSchema(schema);

    const result: Record<string, any> = {};

    schema.forEach((field) => {
        if (field.type !== 'table') return;

        const columnKeys = field.columns.map((col) => col.key).filter((key) => key !== 'label'); // exclude static column

        Object.entries(tableValue || {}).forEach(([rowKey, row]) => {
            const mapping = keyMap[rowKey];
            if (!mapping) return;

            const { section, key } = mapping;

            if (!result[section]) result[section] = {};

            const dynamicRow: Record<string, any> = {};

            columnKeys.forEach((colKey) => {
                let value = row?.[colKey];

                // optional normalization (important)
                if (colKey.toLowerCase().includes('grade') && value !== undefined) {
                    value = Number(value);
                }

                dynamicRow[colKey] = value ?? '';
            });

            result[section][key] = dynamicRow;
        });
    });

    return result;
};
