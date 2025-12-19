import React, { memo } from 'react';

import { Text } from '@components/index';

import { TableDataType } from '@/types/TableType';

import styles from './styles.module.scss';

interface ActionItem {
    icon: React.ReactNode;
    onClick: (columnData: TableDataType) => void;
    title?: string;
}

interface TableActionsProps {
    actions?: ActionItem[];
    rowData: TableDataType;
}

const TableActions = ({ actions, rowData }: TableActionsProps) => (
    <Text tagType='td' className={styles['sticky-action-cell']}>
        <div className={styles['action-icons']}>
            {actions?.map((action, index) => (
                <div
                    key={index as number}
                    onClick={() => {
                        action.onClick(rowData);
                    }}
                    onKeyDown={() => {
                        action.onClick(rowData);
                    }}
                    tabIndex={0}
                    role='button'
                    title={action.title || ''}
                    className={styles['action-icon']}
                >
                    {action.icon}
                </div>
            ))}
        </div>
    </Text>
);

export default memo(TableActions);
