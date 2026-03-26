import React from 'react';
import cx from 'classnames';

import { Checkbox, Dropdown, Input, Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from '../styles.module.scss';

import { FieldValue } from './FormField';

import { TableField as TableFieldType } from '../types/form.types';

interface TableFieldProps<T extends string> {
    field: TableFieldType<T>;
    value: FieldValue;
    onChange: (key: T, value: FieldValue) => void;
    tableRowClassName?: string;
    dropdownClassName?: string;
    labelContainerClassName?: string;
}

const TableField = <T extends string>(props: TableFieldProps<T>) => {
    const {
        field,
        value,
        onChange,
        tableRowClassName,
        dropdownClassName,
        labelContainerClassName,
    } = props;

    const tableValue = (value as Record<string, Record<string, string | string[]>>) || {};

    const handleChange = (rowKey: string, colKey: string, val: string | string[]) => {
        onChange(field.name, {
            ...tableValue,
            [rowKey]: {
                ...tableValue[rowKey],
                [colKey]: val,
            },
        });
    };

    return (
        <div className={styles.tableContainer}>
            {field.rows?.map((section) => (
                <div key={section.section} className={styles.tableSection}>
                    <div className={cx(styles['label-container'], labelContainerClassName)}>
                        {field.columns.map((col) => (
                            <Text
                                key={col.key}
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                className={styles.sectionTitle}
                            >
                                {col.label}
                            </Text>
                        ))}
                    </div>
                    {section.items?.map((item) => (
                        <div key={item.key} className={cx(styles.tableRow, tableRowClassName)}>
                            {/* First column → label */}
                            <Text className={styles.label}>{item.label}</Text>

                            {/* 🔥 Dynamic columns */}
                            {field.columns.slice(1).map((col) => {
                                const cellValue = tableValue[item.key]?.[col.key];

                                if (col.type === 'select') {
                                    return (
                                        <Dropdown
                                            key={col.key}
                                            options={col.options || []}
                                            isSearchable={false}
                                            selectValue='label'
                                            value={(cellValue as string) || null}
                                            widthClassName={cx(dropdownClassName)}
                                            onChange={(val) =>
                                                handleChange(item.key, col.key, val.value)
                                            }
                                        />
                                    );
                                }

                                if (col.type === 'text') {
                                    return (
                                        <Input
                                            name=''
                                            key={col.key}
                                            value={(cellValue as string) || ''}
                                            placeholder='Enter here'
                                            onChange={(e) =>
                                                handleChange(item.key, col.key, e.target.value)
                                            }
                                        />
                                    );
                                }
                                if (col.type === 'checkbox') {
                                    const selectedValues = (value as string[]) || [];

                                    const handleCheckboxChange = (optionValue: string) => {
                                        let updatedValues: string[];

                                        if (selectedValues.includes(optionValue)) {
                                            // remove
                                            updatedValues = selectedValues.filter(
                                                (v) => v !== optionValue,
                                            );
                                        } else {
                                            // add
                                            updatedValues = [...selectedValues, optionValue];
                                        }

                                        onChange(field.name, updatedValues);
                                    };

                                    return (
                                        <div className={styles['checkbox-container']}>
                                            {item.options?.map((optionItem) => (
                                                <Checkbox
                                                    key={col.key}
                                                    isChecked={
                                                        Array.isArray(value)
                                                            ? value?.includes(
                                                                  optionItem?.value as string,
                                                              )
                                                            : false
                                                    }
                                                    labelFont={[
                                                        FontType.text_sm_regular,
                                                        FontType.text_sm_regular,
                                                    ]}
                                                    label={optionItem.label}
                                                    labelColor='gray-900'
                                                    onChange={() =>
                                                        handleCheckboxChange(optionItem.value)
                                                    }
                                                />
                                            ))}
                                        </div>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TableField;
