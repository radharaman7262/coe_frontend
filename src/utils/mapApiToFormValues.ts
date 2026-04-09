/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormSchemaField } from '@/components/shared/Forms/types/form.types';
import { buildKeyMapFromSchema } from './buildKeyMapFromSchema';

export const mapApiToFormValues = <T extends string>(
    schema: FormSchemaField<T>[],
    apiData: Record<string, any>,
) => {
    const values: Record<string, any> = {};
    const keyMap = buildKeyMapFromSchema(schema); // compute once

    schema.forEach((field) => {
        const apiValue = apiData?.[field.name];

        switch (field.type) {
            case 'checkbox': {
                if (typeof apiValue === 'object' && apiValue !== null) {
                    values[field.name] = Object.values(apiValue).filter(Boolean);
                } else {
                    values[field.name] = apiValue || [];
                }
                break;
            }

            case 'table': {
                const tableResult: Record<string, any> = {};

                const columnKeys = field.columns
                    .map((col) => col.key)
                    .filter((key) => !['label', 'joint', 'motion'].includes(key));

                Object.entries(keyMap).forEach(([rowKey, { section, key }]) => {
                    const data = apiData?.[section]?.[key];
                    const rowResult: Record<string, any> = {};

                    columnKeys.forEach((colKey) => {
                        let value = data?.[colKey];

                        if (value === null || value === undefined) value = '';
                        if (typeof value === 'number') value = String(value);

                        rowResult[colKey] = value;
                    });

                    tableResult[rowKey] = rowResult;
                });

                values[field.name] = tableResult;
                break;
            }

            // ✅ FILE / IMAGE HANDLING (BASE64)
            case 'file': {
                values[field.name] = typeof apiValue === 'string' ? apiValue : '';
                break;
            }

            // ✅ DEFAULT INPUT TYPES
            case 'text':
            case 'radio':
            case 'number':
            case 'textArea': {
                values[field.name] = apiValue ?? '';
                break;
            }

            // ✅ FALLBACK (future-proof)
            default: {
                values[field.name] = apiValue ?? '';
            }
        }
    });

    return values;
};
