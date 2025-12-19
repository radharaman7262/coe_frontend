/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-template */
import { GraphType } from '@components/ui/Graph';
import { GraphData, GraphValues } from '../types/common';
import { convertToIndianFormat } from './convertNumber';

const isMobileDevice = () => window.innerWidth <= 425;

export const createGraphValues = (
    graphType: GraphType,
    data: GraphData,
    width?: number,
    title?: string,
    config?: { getData: () => any },
): GraphValues => {
    const options: any = {
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        elements: {
            borderWidth: 10,
        },
        hover: {
            mode: null,
        },
    };

    const getOrCreateTooltip = (chart: any) => {
        let tooltipEl = chart.canvas.parentNode.querySelector('div');
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'myTooltip';
            tooltipEl.style.background = '#0F172A';
            tooltipEl.style.background = 'rgba(12,23,42,0.6)';
            tooltipEl.style.borderRadius = '4px';
            tooltipEl.style.color = 'white';
            tooltipEl.style.opacity = 1;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.transition = 'all .1s ease';

            const table = document.createElement('table');
            table.style.margin = '0px';
            table.style.borderSpacing = '0';

            tooltipEl.appendChild(table);
            chart.canvas.parentNode.appendChild(tooltipEl);
        }

        return tooltipEl;
    };

    const externalTooltipHandler = (context: any) => {
        const { chart, tooltip } = context;
        const tooltipEl = getOrCreateTooltip(chart);
        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        // Set Text
        if (tooltip.body) {
            const tableHead = document.createElement('thead');

            const trArray = [];

            const tableRoot = tooltipEl.querySelector('table');

            // Remove old children
            while (tableRoot.firstChild) {
                tableRoot.firstChild.remove();
            }

            // Add new children

            const tr = document.createElement('tr');
            const td2 = document.createElement('td');
            const name = document.createElement('span');
            const span = document.createElement('span');
            const index = chart.tooltip.dataPoints[0];

            span.style.background = `${config?.getData()[index.datasetIndex].backgroundColor}`;
            span.style.borderColor = 'rgb(255,255,255)';
            span.style.borderStyle = 'solid';
            span.style.marginTop = '8px';
            span.style.marginLeft = '6px';
            span.style.borderWidth = '1px';
            span.style.marginRight = '10px';
            span.style.height = '14px';
            span.style.width = '14px';
            span.style.display = 'inline-block';

            name.innerHTML = `<strong>Subject:</strong> 
            ${config?.getData()[index.datasetIndex].subjectName}`;
            name.style.marginRight = '18px';

            td2.appendChild(span.cloneNode(true));
            td2.appendChild(name.cloneNode(true));
            td2.style.paddingBottom = '8px';

            tr.appendChild(td2);
            trArray.push(tr);
            const tr1 = document.createElement('tr');
            const td21 = document.createElement('td');
            const name1 = document.createElement('span');
            const span1 = document.createElement('span');
            name1.innerHTML = `<strong>Average Score:</strong> 
            ${config?.getData()[index.datasetIndex].data[index.dataIndex]}`;
            name1.style.marginRight = '18px';

            td21.appendChild(span1.cloneNode(true));
            td21.appendChild(name1.cloneNode(true));
            td21.style.paddingBottom = '8px';
            td21.style.paddingLeft = '32px';

            tr1.appendChild(td21);
            trArray.push(tr1);

            trArray.forEach((tr) => {
                tableHead.appendChild(tr);
            });

            const { offsetLeft: positionX } = chart.canvas;

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            if (isMobileDevice()) {
                tooltipEl.style.left = positionX + 100 + 'px';
            } else {
                tooltipEl.style.left = positionX + tooltip.caretX - 5 + 'px';
            }
            tooltipEl.style.top = 1210 + tooltip.caretY - 780 + 'px';
            tooltipEl.style.font = tooltip.options.bodyFont.string;
            tooltipEl.style.padding =
                tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
            tableRoot.appendChild(tableHead);
        }
    };

    const externalTooltipHandler2 = (context: any) => {
        const { chart, tooltip } = context;
        const tooltipEl = getOrCreateTooltip(chart);

        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        const tooltipTitle = title;

        // Set Text
        if (tooltip.body) {
            if (tooltipTitle !== '') {
                const bodyLines = tooltip.body[0].lines[0];

                const tableHead = document.createElement('thead');
                tableHead.style.padding = '10px';

                const colors = tooltip.labelColors[0];
                const label = tooltip.dataPoints[0].dataset.labels[tooltip.dataPoints[0].dataIndex];

                const span = document.createElement('span');
                span.style.background = colors.backgroundColor;
                span.style.borderColor = 'rgb(255,255,255)';
                span.style.borderStyle = 'solid';
                span.style.marginTop = '6px';
                span.style.marginLeft = '6px';
                span.style.borderWidth = '1px';
                span.style.marginRight = '10px';
                span.style.height = '14px';
                span.style.width = '14px';
                span.style.display = 'inline-block';

                const title = document.createElement('span');
                title.style.fontWeight = 'bold';
                title.innerText = `${tooltipTitle}: `;

                const tr1 = document.createElement('tr');
                tr1.style.backgroundColor = 'inherit';

                const name = document.createElement('span');
                name.innerHTML = `${tooltipTitle === 'Grade' ? label.split(' ')[1] : label}`;
                name.style.marginRight = '6px';

                const td1 = document.createElement('td');

                td1.appendChild(span);
                td1.appendChild(title);
                td1.appendChild(name);
                tr1.appendChild(td1);
                tableHead.appendChild(tr1);

                // For Student Count
                const studentCount = document.createElement('span');
                studentCount.style.fontWeight = 'bold';
                studentCount.style.display = 'inline-block';
                studentCount.innerText = 'Quiz Count:';
                studentCount.style.marginLeft = '30px';
                studentCount.style.marginBottom = '6px';
                studentCount.style.marginTop = '6px';
                const text2 = document.createElement('span');
                text2.innerHTML = ` ${
                    bodyLines.length > 6
                        ? convertToIndianFormat(bodyLines.replace(/,/g, ''))
                        : bodyLines
                }`;
                text2.style.marginRight = '6px';

                const tr2 = document.createElement('tr');
                tr2.style.backgroundColor = 'inherit';

                const td2 = document.createElement('td');

                td2.appendChild(studentCount);
                td2.appendChild(text2);
                tr2.appendChild(td2);
                tableHead.appendChild(tr2);
                const tableRoot = tooltipEl.querySelector('table');

                // Remove old children
                while (tableRoot.firstChild) {
                    tableRoot.firstChild.remove();
                }

                // Add new children
                tableRoot.appendChild(tableHead);
                const { offsetLeft: positionX } = chart.canvas;
                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                if (isMobileDevice()) {
                    tooltipEl.style.left = positionX + 100 + 'px';
                } else {
                    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                }
                tooltipEl.style.top =
                    320 +
                    (tooltipTitle === 'Subject' ? tooltip.caretY + 100 : tooltip.caretY) +
                    'px';
                tooltipEl.style.font = tooltip.options.bodyFont.string;
                tooltipEl.style.padding =
                    tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
            } else {
                const tableHead = document.createElement('thead');
                tableHead.style.padding = '10px';

                const colors = tooltip.labelColors[0];
                const label = tooltip.dataPoints[0].dataset.labels[tooltip.dataPoints[0].dataIndex];
                const number = data.data[tooltip.dataPoints[0].dataIndex].toLocaleString('en-IN');

                const span = document.createElement('span');
                span.style.background = colors.backgroundColor;
                span.style.borderColor = 'rgb(255,255,255)';
                span.style.borderStyle = 'solid';
                span.style.marginTop = '6px';
                span.style.marginLeft = '6px';
                span.style.borderWidth = '1px';
                span.style.marginRight = '10px';
                span.style.height = '14px';
                span.style.width = '14px';
                span.style.display = 'inline-block';

                const title = document.createElement('span');
                title.style.fontWeight = 'bold';
                title.innerText = `${label}:`;

                const tr1 = document.createElement('tr');
                tr1.style.backgroundColor = 'inherit';

                const name = document.createElement('span');
                name.innerHTML = ` ${
                    number.length > 6
                        ? convertToIndianFormat(parseInt(number.replace(/,/g, ''), 10))
                        : number
                }`;
                name.style.marginRight = '6px';

                const td1 = document.createElement('td');

                td1.appendChild(span);
                td1.appendChild(title);
                td1.appendChild(name);
                tr1.appendChild(td1);
                tableHead.appendChild(tr1);
                const tableRoot = tooltipEl.querySelector('table');

                // Remove old children
                while (tableRoot.firstChild) {
                    tableRoot.firstChild.remove();
                }

                // Add new children
                tableRoot.appendChild(tableHead);
            }
        }
    };

    // Disable tooltips for pie chart
    if (graphType === GraphType.Pie) {
        options.plugins = {
            tooltip: {
                enabled: false,
            },
        };
        options.responsive = true;
    }

    // Styling for doughnut chart
    if (graphType === GraphType.Doughnut) {
        options.plugins = {
            tooltip: {
                enabled: true,
            },
        };
        options.cutout = '80%';
        options.borderWidth = '2';
        options.responsive = true;
    }

    if (graphType === GraphType.Bar) {
        options.scales = {
            x: {
                grid: {
                    display: false,
                },
            },
        };
        options.barThickness = width;
        options.responsive = true;
        options.plugins = {
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: config?.getData ? externalTooltipHandler : externalTooltipHandler2,
            },
        };
    }

    return {
        type: graphType,
        options,
        graphData: {
            ...(data.labels && { labels: data.labels }),
            datasets: config?.getData?.() || [data],
        },
    };
};
