import { GraphType } from './ChartType';

export type GraphData = {
    data: number[] | string[];
    backgroundColor: string[];
    labels?: string[];
};

export type GraphValues = {
    type: GraphType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: any; // You can specify a more specific type for options if needed
    graphData: {
        datasets: GraphData[];
    };
};

export interface PaginationType {
    page: string;
    limit?: string;
}
