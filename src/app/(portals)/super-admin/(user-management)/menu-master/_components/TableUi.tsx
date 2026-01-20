import React from 'react';

import { Input, Table, Text } from '@/components/index';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { TableDataType } from '@/types/TableType';

import { MENU_MASTER_COLUMNS as dummyColumns, MENU_MASTER_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
    data: TableDataType[];
    totalCount: number;
    limit: number;
    noTitleContainer: string;
    noDescriptionContainer: string;
}

const TableUi = ({
    currentPage,
    setCurrentPage,
    setTableFilter,
    tableFilter,
    data,
    totalCount,
    limit,
    noTitleContainer,
    noDescriptionContainer,
}: tableUiProps) => {
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
            columns={dummyColumns}
            data={data}
            currentPage={currentPage}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            handleClickOnCount={handleClickOnCount}
            totalCount={totalCount}
            numberOfRowsPerPage={limit}
            tableClassName={styles['table-container']}
            baseTableContainerClassName={styles['table-wrapper']}
            baseTableClassName={styles['table-data']}
            noTitleContainer={noTitleContainer}
            noDescriptionContainer={noDescriptionContainer}
        >
            <div className={styles['table-row']}>
                <Input
                    name='search'
                    value={tableFilter}
                    placeholder={text.searchMenuName}
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
