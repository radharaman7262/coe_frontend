import React from 'react';

import { SmallTableTitle, SmallTableBody } from '@components/index';

import { SmallTableHeaderType } from '@/types/TableType';

import { DashboardOverviewData } from '@/app/(portals)/super-admin/dashboard/_components/CenterUserOverView/type';

import styles from './styles.module.scss';

interface OverviewTableProps {
    title: string;
    columns: SmallTableHeaderType[];
    data: DashboardOverviewData[];
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
