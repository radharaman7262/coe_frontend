import React from 'react';

import { Dropdown, Input, Table, Text } from '@/components/index';

import { TableDataType } from '@/types/TableType';

import SearchIcon from '@/public/assets/svg/search-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { StatusDataType, STATIC_STATUS as statusOptions } from '@/constant/appConstants';

import { COLUMNS as constantColumns, STAFF_LIST_TEXT as dummyText } from './constant';

import styles from './styles.module.scss';
import { useGetAdminStaffManagementList } from '../../staff-list/queries';
import { staffListDataType } from '../../staff-list/type';

interface tableUiProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    data: TableDataType[];
    limit: number;
    totalCount: number;
    setTableFilter: React.Dispatch<React.SetStateAction<string>>;
    tableFilter: string;
    StaffFilter: staffListDataType | null;
    setStaffFilter: React.Dispatch<React.SetStateAction<staffListDataType | null>>;
    StatusFilter: StatusDataType | null;
    setStatusFilter: React.Dispatch<React.SetStateAction<StatusDataType | null>>;
}

const TableUi = (props: tableUiProps) => {
    const {
        currentPage,
        setCurrentPage,
        data,
        limit,
        totalCount,
        setTableFilter,
        tableFilter,
        StaffFilter,
        setStaffFilter,
        StatusFilter,
        setStatusFilter,
    } = props;

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    const { isLoading, data: staffListData } = useGetAdminStaffManagementList({
        page: currentPage,
        limit: 1000,
    });

    const { response } = staffListData || {};

    const { data: staffManagementData = [] } = response || {};

    const handleSearchFilter = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { value } = event.target;

        setTableFilter(value);
    };

    const handleStaffSelect = (item: staffListDataType) => {
        setStaffFilter(item);
    };

    const handleStatusSelect = (item: StatusDataType) => {
        setStatusFilter(item);
    };

    const handleClear = () => {
        setStatusFilter(null);
        setStaffFilter(null);
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

                <Dropdown
                    label='All Staff'
                    options={staffManagementData}
                    selectValue='name'
                    value={StaffFilter}
                    isSearchable={false}
                    widthClassName={styles['dropdown-width']}
                    additionalStyle={styles['dropdown-bg']}
                    loading={isLoading}
                    onChange={handleStaffSelect}
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
