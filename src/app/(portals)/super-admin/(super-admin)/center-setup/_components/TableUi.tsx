import React from 'react';

import { Input, Table, Text } from '@/components/index';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { TableDataType } from '@/types/TableType';

import { COLUMNS as constantColumns, NEW_CENTRE_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
    data: TableDataType[];
    totalCount: number;
}

const limit = 25;

const TableUi = (props: tableUiProps) => {
    const { currentPage, setCurrentPage, setTableFilter, tableFilter, data, totalCount } = props;

    const totalPages = Math.ceil(totalCount / limit);

    const handleNextButton = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousButton = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleClickOnCount = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchFilter = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setTableFilter(value);
    };

    const handleClear = () => {
        setTableFilter('');
    };

    return (
        <Table
            columns={constantColumns}
            data={data}
            currentPage={currentPage}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            handleClickOnCount={handleClickOnCount}
            numberOfRowsPerPage={25}
            totalCount={totalCount}
            isPagination={totalCount > 25}
            tableClassName={styles['table-container']}
            baseTableContainerClassName={styles['table-wrapper']}
            baseTableClassName={styles['table-data']}
            noTitleContainer='No Center added yet'
            noDescriptionContainer='Add user type to get started with viewing and managing them here.'
        >
            <div className={styles['table-row']}>
                <Input
                    name='search'
                    value={tableFilter}
                    placeholder={text.searchNameOrUniqueId}
                    inputBaseClass={styles['search-bar']}
                    onChange={handleSearchFilter}
                    StartAdornment={SearchIcon}
                />

                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='red-500'
                    className={styles['clear-text']}
                    onClick={handleClear}
                >
                    {text.clear}
                </Text>
            </div>
        </Table>
    );
};
export default TableUi;
