/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { buildKeyMapFromSchema } from './buildKeyMapFromSchema';

export const mapApiToFormValues = <T extends string>(
    schema: FormSchemaField<T>[],
    apiData: Record<string, any>,
) => {
    const values: Record<string, any> = {};

    schema.forEach((field) => {
        const apiValue = apiData?.[field.name];

        if (field.type === 'checkbox') {
            // convert object → array
            if (typeof apiValue === 'object' && apiValue !== null) {
                values[field.name] = Object.keys(apiValue)
                    .map((key) => apiValue[key])
                    .filter((item) => item !== '');
            } else {
                values[field.name] = apiValue || [];
            }
        }
        if (field.type === 'table') {
            const keyMap = buildKeyMapFromSchema(schema);

            const tableResult: Record<string, any> = {};

            const columnKeys = field.columns.map((col) => col.key).filter((key) => key !== 'label');

            Object.entries(keyMap).forEach(([rowKey, { section, key }]) => {
                const data = apiData?.[section]?.[key];

                const rowResult: Record<string, any> = {};

                columnKeys.forEach((colKey) => {
                    let value = data?.[colKey];

                    // normalize for UI (important)
                    if (value === null || value === undefined) {
                        value = '';
                    }

                    // convert number → string (for dropdown/input)
                    if (typeof value === 'number') {
                        value = String(value);
                    }

                    rowResult[colKey] = value;
                });

                tableResult[rowKey] = rowResult;

                // if (data) {
                //     tableResult[rowKey] = {
                //         grade:
                //             data.grade !== null && data.grade !== undefined
                //                 ? String(data.grade)
                //                 : '',
                //         comments: data.comments || '',
                //     };
                // }
            });

            values[field.name] = tableResult;
        }
        if (field.type === 'text' || field.type === 'radio' || field.type === 'number') {
            values[field.name] = apiValue ?? '';
        }
    });

    return values;
};
