import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

const normalize = (str: string) =>
    str
        .toLowerCase()
        .replace(/\s+/g, '') // remove spaces
        .replace(/[^a-z0-9]/g, ''); // remove special chars

export const buildKeyMapFromSchema = <T extends string>(schema: FormSchemaField<T>[]) => {
    const map: Record<string, { section: string; key: string }> = {};

    schema.forEach((field) => {
        if (field.type !== 'table') return;

        field.rows.forEach((section) => {
            const { sectionKey } = section;

            section.items.forEach((item) => {
                map[item.key] = {
                    section: sectionKey ?? '',
                    key: normalize(item.label),
                };
            });
        });
    });

    return map;
};
