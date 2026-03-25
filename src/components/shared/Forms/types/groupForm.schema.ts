
export type FieldType = 'checkbox' | 'radio' | 'text' | 'group';

export interface FieldOption {
  label: string;
  value: string;
}

export interface FormFieldSchema {
  key: string;
  label?: string;
  type: FieldType;
  options?: FieldOption[];
  children?: FormFieldSchema[]; // for groups
}

export interface SectionSchema {
  key: string;
  title: string;
  fields: FormFieldSchema[];
}