import React from 'react';

import { Input, Table, Text } from '@/components/index';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { COLUMNS as constantColumns, NEW_CENTRE_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
}

const TableUi = (props: tableUiProps) => {
    const { currentPage, setCurrentPage, setTableFilter, tableFilter } = props;

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

    const handleClear = () => {
        setTableFilter('');
    };

    return (
        <Table
            columns={constantColumns}
            data={[]}
            currentPage={currentPage}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            totalCount={200}
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
