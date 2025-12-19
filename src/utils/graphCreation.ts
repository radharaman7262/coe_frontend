/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphType } from '@components/ui/Graph';
import { createGraphValues } from './chartJsCommonFunctions';

export const GraphCreation = (data: any, width: number, title?: string, graphView?: GraphType) => {
    const GraphDetailsData = Object.keys(data).length > 0;

    const studentCounts: string[] = GraphDetailsData
        ? data?.map((item: any) =>
              item?.quizCount === '0' ? '50' : item?.quizCount || item?.count || item?.score,
          )
        : [];

    const backgroundColors: string[] = GraphDetailsData
        ? data?.map((item: any) => (item?.quizCount === '0' ? '#CBD5E1' : item?.colour))
        : [];

    const labels: string[] = GraphDetailsData ? data?.map((item: any) => item?.name) : [];

    const GraphDetailsValues = createGraphValues(
        graphView || GraphType.Bar,

        {
            data: studentCounts,
            backgroundColor: backgroundColors,
            labels,
        },
        width,
        title,
    );

    return GraphDetailsValues;
};
