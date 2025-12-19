/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    BarElement,
    Filler,
    Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    BarElement,
    Filler,
    Tooltip,
);

// Define an enum for the allowed graph types
export enum GraphType {
    Pie = 'pie',
    Doughnut = 'doughnut',
    SemiCircle = 'semiCircle',
    Bar = 'bar',
    Line = 'line',
    // Add more graph types here
}

// Define a type for graph component mappings
type GraphComponentType = {
    [key in GraphType]: React.ComponentType<any>;
};

// Add different types of graphs here
export const graphComponentsType: GraphComponentType = {
    [GraphType.Pie]: Pie,
    [GraphType.Doughnut]: Doughnut,
    [GraphType.SemiCircle]: Doughnut,
    [GraphType.Bar]: Bar,
    [GraphType.Line]: Line,
};

type GraphProps = {
    graphType: GraphType;
    graphData: any;
    graphOptions?: any;
};

const Graph = (props: GraphProps) => {
    const { graphData, graphType, graphOptions } = props;

    const GraphComponent = graphComponentsType[graphType];

    return <GraphComponent data={graphData} options={graphOptions} />;
};

Graph.defaultProps = {
    graphOptions: null,
};

export default memo(Graph);
