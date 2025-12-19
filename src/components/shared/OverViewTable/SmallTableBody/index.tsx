/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { SmallTableHeaderType, TableDataType } from '@/types/TableType';

import { Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface SmallTableBodyProps {
    columns: SmallTableHeaderType[];
    data: TableDataType[];
}

const SmallTableBody = (props: SmallTableBodyProps) => {
    const { columns, data } = props;

    return (
        <div className={styles.table}>
            {/* Columns */}
            <div className={styles.rowHeader}>
                {columns.map((col, index) => (
                    <div
                        key={String(col.accessor)}
                        className={index !== 0 ? styles['box-position-width'] : ''}
                    >
                        <Text
                            color='text-idle'
                            font={[FontType.text_xxs_medium, FontType.text_xxs_medium]}
                        >
                            {col.header}
                        </Text>
                    </div>
                ))}
            </div>

            {/* Rows */}
            {data.map((row: any) => (
                <div key={row.id} className={styles.row}>
                    {columns.map((col, index) => (
                        <div
                            key={String(col.accessor)}
                            className={styles.cell}
                            style={{ textAlign: 'left' }}
                        >
                            {index === 0 && row.color && (
                                <span
                                    className={styles.colorBar}
                                    style={{ backgroundColor: row.color }}
                                />
                            )}
                            <Text
                                color='text-idle'
                                font={[FontType.text_xxs_medium, FontType.text_xxs_medium]}
                            >
                                {String(row[col.accessor])}
                            </Text>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default SmallTableBody;
