import React, { memo } from 'react';
import cx from 'classnames';

import { TableActions, Text } from '@components/index';

import { ColorVariant, FontType } from '@/types/typographyCommon';
import { TableDataType, TableHeaderType } from '@/types/TableType';

import styles from './styles.module.scss';

interface TableBodyPropsType {
    /**
     * This is used for the table column header data.
     */
    columns: TableHeaderType[];
    /**
     * This is used for the table data for the respective column?.
     */
    data: TableDataType[];
    /**
     * This function is used for handling redirection.
     */
    handleRedirection?: (columnItem: TableDataType) => void;
    /**
     * This is used action in table.
     */
    actions?: {
        icon: React.ReactNode;
        onClick: (rowData: TableDataType) => void;
        title?: string;
    }[];

    tableBodyTextColor?: ColorVariant;
}

const TableBody = (props: TableBodyPropsType) => {
    const { data, columns, handleRedirection, actions, tableBodyTextColor } = props;

    console.warn('Build Version');

    const bodyColor = tableBodyTextColor || 'gray-900';

    return (
        <Text tagType='tbody' className={styles['table-body']}>
            {data.map((row, rowIndex) => (
                <Text
                    tagType='tr'
                    key={rowIndex as number}
                    className={cx(styles['table-row'], handleRedirection && styles['hover-effect'])}
                >
                    {columns?.map((columnItem, columnIndex) => (
                        <Text
                            key={columnIndex as number}
                            tagType='td'
                            font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                            color={bodyColor}
                            className={styles['table-row-cell']}
                            onClick={handleRedirection ? () => handleRedirection(row) : undefined}
                        >
                            {row[columnItem.accessor] || 'N/A'}
                        </Text>
                    ))}
                    {actions?.length && <TableActions actions={actions} rowData={row} />}
                </Text>
            ))}
        </Text>
    );
};

export default memo(TableBody);
