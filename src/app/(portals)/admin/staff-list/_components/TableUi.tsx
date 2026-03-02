import React from 'react';

import { Table } from '@/components/index';

import { TableDataType } from '@/types/TableType';

import { COLUMNS as constantColumns, STAFF_LIST_TEXT as dummyText } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    data: TableDataType[];
    limit: number;
    totalCount: number;
}

const TableUi = (props: tableUiProps) => {
    const { currentPage, setCurrentPage, data, limit, totalCount } = props;

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <Table
            columns={constantColumns}
            data={data}
            currentPage={currentPage}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            totalCount={totalCount}
            numberOfRowsPerPage={limit || 10}
            isPagination
            tableClassName={styles['table-container']}
            baseTableContainerClassName={styles['table-wrapper']}
            baseTableClassName={styles['table-data']}
            noTitleContainer={dummyText.noDataTitle}
            noDescriptionContainer={dummyText.noDataDescription}
        />
    );
};
export default TableUi;
