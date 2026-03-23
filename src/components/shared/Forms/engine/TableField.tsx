import React from 'react';
import cx from 'classnames';

import { Dropdown, Input, Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from '../styles.module.scss';

import { FieldValue } from './FormField';

import { TableField as TableFieldType } from '../types/form.types';

interface TableFieldProps<T extends string> {
    field: TableFieldType<T>;
    value: FieldValue;
    onChange: (key: T, value: FieldValue) => void;
    tableRowClassName?: string;
    dropdownClassName?:string;
}

const TableField = <T extends string>(props: TableFieldProps<T>) => {
    const { field, value, onChange, tableRowClassName , dropdownClassName } = props;

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
                    <div className={styles['label-container']}>
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
