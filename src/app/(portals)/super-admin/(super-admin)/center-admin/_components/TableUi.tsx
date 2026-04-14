import React from 'react';

import { Input, Table, Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { TableDataType } from '@/types/TableType';

import { CENTERADMIN_TEXT as text, COLUMNS as constantColumns } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
    data: TableDataType[];
    totalCount: number;
}

const TableUi = (props: tableUiProps) => {
    const { currentPage, setCurrentPage, setTableFilter, tableFilter, data, totalCount } = props;

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleClickOnCount = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchFilter = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const formattedValue = value.replace(/^\s+/, '');

        setTableFilter(formattedValue);
    };

    const handleClear = () => {
        setTableFilter('');
    };

    return (
        <Table
            columns={constantColumns}
            data={data}
            currentPage={currentPage}
            handleClickOnCount={handleClickOnCount}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            totalCount={totalCount}
            numberOfRowsPerPage={25}
            isPagination={totalCount > 25}
            tableClassName={styles['table-container']}
            baseTableContainerClassName={styles['table-wrapper']}
            baseTableClassName={styles['table-data']}
            noTitleContainer='No Users added yet'
            noDescriptionContainer='Add user type to get started with viewing and managing them here.'
        >
            <div className={styles['table-row']}>
                <Input
                    name='search'
                    value={tableFilter}
                    placeholder={text.searchNameOrUserType}
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
