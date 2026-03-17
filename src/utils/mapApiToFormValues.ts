/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

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
                values[field.name] = Object.keys(apiValue).filter((key) => apiValue[key]);
            } else {
                values[field.name] = apiValue || [];
            }
        } else {
            values[field.name] = apiValue ?? '';
        }
    });

    return values;
};
