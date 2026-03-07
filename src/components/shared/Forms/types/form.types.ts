export type FieldType = 'text' | 'number' | 'radio' | 'checkbox' | 'select';

export interface OptionType {
    label: string;
    value: string;
}

export type FormSchemaField<T extends string> =
    | {
          name: T;
          label: string;
          type: FieldType;
          placeholder?: string;
          options: OptionType[];
          required?: boolean;
      }
    | {
          name: T;
          label: string;
          type: 'radio' | 'checkbox' | 'select';
          options: OptionType[];
          required?: boolean;
      };
