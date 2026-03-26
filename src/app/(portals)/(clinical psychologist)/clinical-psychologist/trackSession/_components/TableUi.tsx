import React from 'react';

import { Dropdown, Input, Table, Text } from '@/components/index';

import { TableDataType } from '@/types/TableType';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { StatusDataType, STATIC_STATUS as statusOptions } from '@/constant/appConstants';

import { COLUMNS as constantColumns, TRACK_SESSION_TEXT as dummyText } from './constant';

import styles from './styles.module.scss';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    data: TableDataType[];
    totalCount: number;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
    StatusFilter: StatusDataType | null;
    setStatusFilter: React.Dispatch<React.SetStateAction<StatusDataType | null>>;
}

const TableUi = (props: tableUiProps) => {
    const {
        currentPage,
        setCurrentPage,
        data,
        totalCount,
        setTableFilter,
        tableFilter,
        StatusFilter,
        setStatusFilter,
    } = props;

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

    const handleStatusSelect = (item: StatusDataType) => {
        setStatusFilter(item);
    };

    const handleClear = () => {
        setStatusFilter(null);
        setTableFilter('');
    };

    return (
        <Table
            columns={constantColumns}
            data={data}
            currentPage={currentPage}
            handleNextButton={handleNextButton}
            handlePreviousButton={handlePreviousButton}
            totalCount={totalCount}
            numberOfRowsPerPage={25}
            isPagination={totalCount > 25}
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

                <Dropdown
                    label='All Status'
                    options={statusOptions}
                    selectValue='name'
                    value={StatusFilter}
                    isSearchable={false}
                    widthClassName={styles['dropdown-width']}
                    additionalStyle={styles['dropdown-bg']}
                    onChange={handleStatusSelect}
                />

                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='red-500'
                    className={styles['clear-text']}
                    onClick={handleClear}
                >
                    Clear
                </Text>
            </div>
        </Table>
    );
};

export default TableUi;
