/**
 * @file
 * Table component
 */
import React, { memo, ReactNode } from 'react';

import cx from 'classnames';

import { NoDataContainer, Pagination } from '@components/index';

import { FiltersType, TableDataType, TableHeaderType } from '@/types/TableType';

import { ColorVariant } from '@/types/typographyCommon';

import BaseTable from './BaseTable';

import styles from './styles.module.scss';

interface AdminTablePropsType {
    /**
     * This is used for the table column header data.
     */
    columns: TableHeaderType[];
    /**
     * This is used for the table data for the respective column?.
     */
    data: TableDataType[];
    /**
     * This represents total data present.
     */
    totalCount?: number;
    /**
     * This represents current page in pagination.
     */
    currentPage?: number;
    /**
     * This function is used for handling pagination when user click on Previous button.
     */
    handlePreviousButton?: () => void;
    /**
     * This function is used for handling pagination when user click on Next button.
     */
    handleNextButton?: () => void;
    /**
     * This function is used for handling redirection.
     */
    handleRedirection?: (columnItem: TableDataType) => void;
    /**
     * This shows number of rows showing at once.
     */
    numberOfRowsPerPage?: number;
    /**
     * This is used for the searching the data when user type input searches.
     */
    filters?: FiltersType<TableHeaderType>;
    /**
     * This function is used for the setting the input based.
     */
    handleFilterChange?: (accessor: string, value: string) => void;
    /**
     * This is used for whether user want filter or not.
     */
    isFilterPresent?: boolean;
    /**
     * This is used action in table.
     */
    actions?: {
        icon: React.ReactNode;
        onClick: (rowData: TableDataType) => void;
        title?: string;
    }[];

    /**
     * This is used when there is no pagination.
     */
    isPagination?: boolean;
    /**
     * This is baseTableClassName is used for giving height of table Body
     */
    baseTableClassName?: string;

    handleClickOnCount?: (count: number) => void;

    tableClassName?: string;
    /**
     * Minimize Maximize icon Collapse
     */

    tableBodyTextColor?: ColorVariant;

    children?: ReactNode;

    baseTableContainerClassName?: string;

    noTitleContainer?: string;

    noDescriptionContainer?: string;
}

const AdminTable = (props: AdminTablePropsType) => {
    const {
        columns,
        data,
        filters,
        handleFilterChange,
        currentPage,
        totalCount,
        handleNextButton,
        handlePreviousButton,
        numberOfRowsPerPage,
        handleRedirection,
        actions,
        isFilterPresent = false,
        isPagination = true,
        baseTableClassName,
        handleClickOnCount,
        tableClassName,
        tableBodyTextColor,
        children,
        baseTableContainerClassName,
        noTitleContainer,
        noDescriptionContainer,
    } = props;

    const TablePagination =
        isPagination && handleNextButton && handlePreviousButton && data?.length && totalCount;

    return (
        <div className={styles['body-argument']}>
            {children}
            {!data?.length ? (
                <NoDataContainer
                    title={noTitleContainer || ''}
                    description={noDescriptionContainer || ''}
                />
            ) : (
                <div className={cx(styles.wrapper, tableClassName)}>
                    <div className={cx(baseTableContainerClassName)}>
                        <BaseTable
                            columns={columns}
                            data={data}
                            filters={filters}
                            handleFilterChange={handleFilterChange}
                            handleRedirection={handleRedirection}
                            isFilterPresent={isFilterPresent}
                            actions={actions}
                            baseTableClassName={baseTableClassName}
                            tableBodyTextColor={tableBodyTextColor}
                        />

                        {TablePagination ? (
                            <div className={styles['pagination-container']}>
                                <Pagination
                                    totalCount={totalCount}
                                    handleNextButton={handleNextButton}
                                    handlePreviousButton={handlePreviousButton}
                                    currentPage={currentPage}
                                    numberOfRowsPerPage={numberOfRowsPerPage}
                                    handleClickOnCount={handleClickOnCount}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * This component provides a way to render table components with various styling options.
 *
 * @example
 *      <Table
        columns={COLUMNS}
        data={REVIEWER_DATA}
        filters={filters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleNextButton={handleNextButton}
        handlePreviousButton={handlePreviousButton}
        totalCount={200}
        handleFilterChange={handleFilterChange}
        />
 */

export default memo(AdminTable);
