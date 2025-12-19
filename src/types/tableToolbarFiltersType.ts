// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableToolbarFilterType<T = any> {
    options: T[];
    onChange: (item: T) => void;
    selectValue: string;
    value: T | T[] | null;
    label: string;
    isSearchable?: boolean;
    projectType?: string | undefined;
    className?: string;
}
