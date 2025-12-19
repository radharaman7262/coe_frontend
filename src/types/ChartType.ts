import React from 'react';

export enum GraphType {
    Pie = 'pie',
    Doughnut = 'doughnut',
    SemiCircle = 'semiCircle',
    Bar = 'bar',
    Line = 'line',
    // Add more graph types here
}

// Define a type for graph component mappings
export type GraphComponentType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in GraphType]: React.ComponentType<any>;
};

export interface ChartOptionsType {
    maintainAspectRatio: boolean;
    cutoutPercentage?: number; // optional, deprecated in newer Chart.js versions
    elements: {
        borderWidth: number;
    };
    hover: {
        mode: string | null;
    };
    plugins: {
        tooltip: {
            enabled: boolean;
        };
    };
    cutout?: string; // used in Doughnut/Pie chart in newer versions instead of cutoutPercentage
    borderWidth?: string | number; // you have it as a string, but could be number too
    responsive: boolean;
}

export interface ChartDataType {
    labels: string[];
    datasets: Array<{
        data: number[];
        backgroundColor: string[];
        labels?: string[]; // Not typically used in datasets in Chart.js, but included since you provided it
    }>;
}
