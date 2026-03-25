/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { SmallTableHeaderType, TableDataType } from '@/types/TableType';
import { DashboardOverviewData } from '@/app/(portals)/super-admin/dashboard/_components/CenterUserOverView/type';
import { goalTrackerType, sessionLogType } from '@/app/(portals)/profile/[id]/_components/type';

import cx from 'classnames';

import { Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface SmallTableBodyProps {
    columns: SmallTableHeaderType[];
    data: TableDataType[] | DashboardOverviewData[] | goalTrackerType[] | sessionLogType[];
    smallTableClass?: string;
    headerClassName?: string;
    headerBaseClass?: string;
}

const SmallTableBody = (props: SmallTableBodyProps) => {
    const { columns, data, headerClassName, headerBaseClass, smallTableClass } = props;

    return (
        <div className={cx(styles.table, smallTableClass)}>
            <div className={cx(styles.rowHeader, headerClassName)}>
                {columns.map((col, index) => (
                    <div
                        key={String(col.accessor)}
                        className={cx(headerBaseClass, {
                            [styles['box-position-width']]: index !== 0,
                        })}
                    >
                        <Text
                            color='text-idle'
                            font={[FontType.text_xxs_medium, FontType.text_xxs_medium]}
                        >
                            {col.header}
                        </Text>
                    </div>
                ))}
            </div>

            {data.map((row: any) => (
                <div key={row.id} className={cx(styles.row, headerClassName)}>
                    {columns.map((col, index) => (
                        <div
                            key={String(col.accessor)}
                            className={styles.cell}
                            style={{ textAlign: 'left' }}
                        >
                            {index === 0 && row.color && (
                                <span
                                    className={styles.colorBar}
                                    style={{ backgroundColor: row.color }}
                                />
                            )}
                            <Text
                                color={index === 0 ? 'text-gray-900' : 'text-idle'}
                                font={
                                    index === 0
                                        ? [FontType.text_xs_semibold, FontType.text_xs_semibold]
                                        : [FontType.text_xs_medium, FontType.text_xs_medium]
                                }
                            >
                                {row[col.accessor] || 'N/A'}
                            </Text>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default SmallTableBody;
