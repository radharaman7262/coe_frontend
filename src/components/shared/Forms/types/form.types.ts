export type FieldType = 'text' | 'number' | 'radio' | 'checkbox' | 'select' | 'table' | 'group';

export interface OptionType {
    label: string;
    value: string;
    key?: string;
}

// export type GroupField<T extends string> = {
//     type: 'group';
//     label: string;
//     fields: FormSchemaField<T>[];
// };

export type ShowWhenCondition<T> = {
    field: T;
    value: string | number | boolean;
};

export type TableColumn = {
    key: string;
    label: string;
    type?: 'text' | 'select' | 'radio' | 'checkbox' | 'textArea';
    options?: OptionType[];
};

export interface TableDropdownOptionType {
    label: string;
    value: string;
}

export type TableRowItem = {
    key: string;
    label: string;
    helperText?: string;
    options?: TableDropdownOptionType[];
};

export type TableSection = {
    section: string;
    sectionKey?: string;
    items: TableRowItem[];
};

type BaseField<T extends string> = {
    name: T;
    label: string;
    required?: boolean;
    showWhen?: ShowWhenCondition<T>;
    helperText?: string;
    helperInputText?: string;
};

export type SimpleField<T extends string> = BaseField<T> & {
    type: 'text' | 'number' | 'textArea';
    placeholder?: string;
    options?: OptionType[];
};

export type OptionField<T extends string> = BaseField<T> & {
    type: 'radio' | 'checkbox' | 'select';
    options: OptionType[];
};

export type TableField<T extends string> = BaseField<T> & {
    type: 'table';
    columns: TableColumn[];
    rows: TableSection[];
};

export type FormSchemaField<T extends string> = SimpleField<T> | OptionField<T> | TableField<T>;
// | GroupField<T>;
