/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormFieldSchema, SectionSchema } from '../types/groupForm.schema';

export const getSectionProgress = (section: SectionSchema, state: Record<string, any>) => {
    let total = 0;
    let filled = 0;

    const traverse = (fields: FormFieldSchema[], sectionState: any) => {
        fields.forEach((field) => {
            if (field.type === 'group') {
                traverse(field.children || [], sectionState);
            } else {
                total += 1;
                const value = sectionState?.[field.key];
                if (value && (Array.isArray(value) ? value.length : true)) {
                    filled += 1;
                }
            }
        });
    };

    traverse(section.fields, state[section.key]);

    return Math.round((filled / total) * 100) || 0;
};
