import React from 'react';

import { Input, Table } from '@/components/index';

import { TableDataType } from '@/types/TableType';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { COLUMNS as constantColumns, ASSESSMENT_TEXT as dummyText } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    data: TableDataType[];
    limit: number;
    totalCount: number;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
}

const TableUi = (props: tableUiProps) => {
    const { currentPage, setCurrentPage, data, limit, totalCount, setTableFilter, tableFilter } =
        props;

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSearchFilter = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setTableFilter(value);
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
        >
            <div className={styles['table-row']}>
                <Input
                    name='search'
                    value={tableFilter}
                    placeholder='Search name'
                    inputBaseClass={styles['search-bar']}
                    StartAdornment={SearchIcon}
                    onChange={handleSearchFilter}
                />
            </div>
        </Table>
    );
};

export default TableUi;
