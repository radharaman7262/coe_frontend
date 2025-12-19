import { ReactNode } from 'react';

export enum FilterTypeEnum {
    INPUT = 'input',
    CALENDAR = 'calendar',
}
export interface TableHeaderType<key extends string = string> {
    header: string;
    accessor: key;
    disable?: boolean;
    filterType?: FilterTypeEnum;
}

export type TableDataType<Key extends string = string> = Record<Key, ReactNode>;

export type FiltersType<T> = {
    [K in keyof T]?: string;
};

export interface SmallTableHeaderType<key extends string = string> {
    header: string;
    accessor: key;
}
