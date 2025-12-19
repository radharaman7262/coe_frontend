import React, { JSX, memo } from 'react';
import dayjs from 'dayjs';

import cx from 'classnames';

import { BasicDatePicker, Text } from '@components/index';

import { FiltersType, FilterTypeEnum, TableHeaderType } from '@/types/TableType';
import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface TableHeaderPropsType {
    /**
     * This is used for the table column header data.
     */
    columns: TableHeaderType[];
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
}

export const renderTextInput = (
    column: TableHeaderType,
    value: string,
    handleChange: (newValue: string) => void,
    index: number,
) => (
    <td key={`filter-${index}`}>
        <input
            type='text'
            className={cx(styles['search-input'], { [styles['disable-input']]: column.disable })}
            placeholder={column.disable ? '' : 'Type here'}
            value={value}
            disabled={column.disable}
            onChange={(e) => handleChange(e.target.value)}
        />
    </td>
);

export const renderCalendarInput = (
    column: TableHeaderType,
    value: string,
    handleChange: (newValue: string) => void,
    index: number,
) => (
    <td key={`filter-${index}`}>
        <BasicDatePicker
            value={value ? dayjs(value) : null}
            onChange={(newDate) => {
                const onlyDate = newDate?.startOf('day');

                //  handleChange(newDate?.toISOString() || '')
                handleChange(`${onlyDate?.format('YYYY-MM-DD')}`);
            }}
        />
    </td>
);

const TableHeader = (props: TableHeaderPropsType) => {
    const { columns, filters = {}, handleFilterChange, isFilterPresent } = props;

    const renderHeaderCell = (header: string, index: number) => (
        <Text
            key={`header-${index}`}
            tagType='th'
            className={styles['header-cell']}
            color='gray-600'
            font={[FontType.text_xs_bold, FontType.text_xs_bold]}
        >
            {header}
        </Text>
    );

    const renderFilterInput = (column: TableHeaderType, index: number) => {
        const { accessor, filterType } = column;
        const value = filters[accessor as keyof typeof filters] || '';

        const handleChange = (newValue: string) => {
            handleFilterChange?.(accessor, newValue);
        };

        const inputRenderers: Record<
            FilterTypeEnum,
            (
                col: TableHeaderType,
                val: string,
                onChange: (val: string) => void,
                index: number,
            ) => JSX.Element
        > = {
            [FilterTypeEnum.INPUT]: renderTextInput,
            [FilterTypeEnum.CALENDAR]: renderCalendarInput,
        };

        const renderFn = inputRenderers[filterType as FilterTypeEnum];

        return renderFn ? (
            renderFn(column, value, handleChange, index)
        ) : (
            <td key={`filter-${index}`} />
        );
    };

    return (
        <Text tagType='thead' className={styles['table-head']}>
            <Text tagType='tr' className={styles['column-name']} color='gray-600'>
                {columns.map((col, index) => renderHeaderCell(col.header, index))}
            </Text>
            {isFilterPresent && (
                <Text tagType='tr'>
                    {columns.map((col, index) => renderFilterInput(col, index))}
                    <td className={styles['disable-input']} />
                </Text>
            )}
        </Text>
    );
};

export default memo(TableHeader);
