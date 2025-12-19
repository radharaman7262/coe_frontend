import React, { memo } from 'react';

import cx from 'classnames';

import { TableBody, TableHeader, Text } from '@components/index';

import { FiltersType, TableDataType, TableHeaderType } from '@/types/TableType';
import { ColorVariant } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface BaseTablePropsType {
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
     * This is used for the searching the data when user type input searches.
     */
    filters?: FiltersType<TableHeaderType>;
    /**
     * This function is used for the setting the input based.
     */
    handleFilterChange?: (accessor: string, value: string) => void;
    /**
     * This is used for whether user want filter or not
     */
    isFilterPresent?: boolean;
    /**
     * This is used action in table
     */
    actions?: {
        icon: React.ReactNode;
        onClick: (rowData: TableDataType) => void;
        title?: string;
    }[];
    /**
     * This is baseTableClassName is used for giving height of table Body
     */
    baseTableClassName?: string;

    tableBodyTextColor?: ColorVariant | undefined;
}

const BaseTable = (props: BaseTablePropsType) => {
    const {
        columns,
        data,
        filters,
        handleFilterChange,
        handleRedirection,
        isFilterPresent,
        actions,
        baseTableClassName,
        tableBodyTextColor,
    } = props;

    return (
        <div className={cx(styles['table-wrapper'], baseTableClassName)}>
            <Text tagType='table' className={styles.table}>
                <TableHeader
                    columns={columns}
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                    isFilterPresent={isFilterPresent}
                />
                {data?.length ? (
                    <TableBody
                        columns={columns}
                        data={data}
                        handleRedirection={handleRedirection}
                        actions={actions}
                        tableBodyTextColor={tableBodyTextColor}
                    />
                ) : null}
            </Text>
        </div>
    );
};

export default memo(BaseTable);
