import React from 'react';

import { SmallTableTitle, SmallTableBody } from '@components/index';

import { SmallTableHeaderType, TableDataType } from '@/types/TableType';

import styles from './styles.module.scss';

interface OverviewTableProps {
    title: string;
    data: TableDataType[];
    columns: SmallTableHeaderType[];
    showAction?: boolean;
    actionLabel?: string;
}

const OverviewTable = ({
    title,
    columns,
    data,
    showAction = false,
    actionLabel,
}: OverviewTableProps) => (
    <div className={styles.card}>
        <SmallTableTitle title={title} showAction={showAction} actionLabel={actionLabel} />

        <SmallTableBody columns={columns} data={data} />
    </div>
);

export default OverviewTable;
