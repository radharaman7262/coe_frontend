import cx from 'classnames';

import { Input, Radio, Checkbox, Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import styles from '../styles.module.scss';
import { FormSchemaField } from '../types/form.types';

export type FieldValue = string | string[];

export interface FormFieldProps<T extends string> {
    field: FormSchemaField<T>;
    value: FieldValue;
    onChange: (key: T, value: FieldValue) => void;
    className?: string;
}

const FormField = <T extends string>(props: FormFieldProps<T>) => {
    const { field, value, onChange, className } = props;

    const renderField = () => {
        switch (field.type) {
            case 'text':
            case 'number':
                return (
                    <Input
                        value={(value as string) || ''}
                        placeholder={field.placeholder}
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
                                isChecked={value?.includes(option?.value as string)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                // inputClassName={styles["input-className"]}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                        ))}
                    </div>
                );
            }

            default:
                return null;
        }
    };

    return (
        <div className={styles.formRow}>
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
