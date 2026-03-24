import cx from 'classnames';

import { Input, Radio, Checkbox, Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { FormSchemaField } from '../types/form.types';

import styles from '../styles.module.scss';
import TableField from './TableField';

export type TableValue = Record<string, Record<string, string | string[]>>;

export type FieldValue = string | string[] | TableValue;

export interface FormFieldProps<T extends string, TValue = FieldValue> {
    field: FormSchemaField<T>;
    value: TValue;
    onChange: (key: T, value: TValue) => void;
    className?: string;
    formGridClassName?: string;
    tableRowClassName?: string;
    dropdownClassName?: string;
}

const FormField = <T extends string>(props: FormFieldProps<T>) => {
    const {
        field,
        value,
        onChange,
        className,
        formGridClassName,
        tableRowClassName,
        dropdownClassName,
    } = props;

    const renderField = () => {
        switch (field.type) {
            case 'text':
            case 'number':
                return (
                    <Input
                        value={(value as string) || ''}
                        placeholder={field.placeholder}
                        type={field.type}
                        name={field.name}
                        onChange={(e) => onChange(field.name, e.target.value)}
                    />
                );

            case 'radio':
                return (
                    <div className={cx(styles.radioGroup, className)}>
                        {field.options?.map((option) => (
                            <Radio
                                key={option.value}
                                name={field.name}
                                label={option.label}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange(field.name, option.value)}
                            />
                        ))}
                    </div>
                );

            case 'checkbox': {
                const selectedValues = (value as string[]) || [];

                const handleCheckboxChange = (optionValue: string) => {
                    let updatedValues: string[];

                    if (selectedValues.includes(optionValue)) {
                        // remove
                        updatedValues = selectedValues.filter((v) => v !== optionValue);
                    } else {
                        // add
                        updatedValues = [...selectedValues, optionValue];
                    }

                    onChange(field.name, updatedValues);
                };
                return (
                    <div className={styles.checkboxGroup}>
                        {field.options?.map((option) => (
                            <Checkbox
                                key={option.value}
                                label={option.value}
                                isChecked={
                                    Array.isArray(value)
                                        ? value?.includes(option?.value as string)
                                        : false
                                }
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                // inputClassName={styles["input-className"]}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                        ))}
                    </div>
                );
            }

            case 'table':
                return (
                    <TableField
                        tableRowClassName={tableRowClassName}
                        field={field}
                        value={value}
                        onChange={onChange}
                        dropdownClassName={dropdownClassName}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className={cx(styles.formRow, formGridClassName)}>
            <Text
                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                color='text-idle'
                tagType='label'
            >
                {field.label}
            </Text>

            {renderField()}
        </div>
    );
};

export default FormField;
