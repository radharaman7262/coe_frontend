import { DashboardOverviewData } from './type';

export const columns = [
    { header: 'Center Name', accessor: 'center' },
    { header: 'Active Students', accessor: 'activeStudent' },
    { header: 'Staff', accessor: 'staff' },
    { header: 'Pending Cases', accessor: 'pendingCases' },
];

export const DUMMY_RESPONSE: DashboardOverviewData[] = [
    {
        id: 1,
        center: "Mother's Grace-Delhi",
        activeStudent: 112,
        staff: 15,
        pendingCases: 8,
        color: '#00DD5A',
    },
    {
        id: 2,
        center: "Mother's Grace-Mumbai",
        activeStudent: 95,
        staff: 12,
        pendingCases: 5,
        color: '#D0AFFF',
    },
    {
        id: 3,
        center: "Mother's Grace-Pune",
        activeStudent: 80,
        staff: 10,
        pendingCases: 3,
        color: '#FFA3DA',
    },
    {
        id: 4,
        center: "Mother's Grace-Jaipur",
        activeStudent: 65,
        staff: 8,
        pendingCases: 6,
        color: '#78C8FF',
    },
    {
        id: 5,
        center: "Mother's Grace-Lucknow",
        activeStudent: 105,
        staff: 14,
        pendingCases: 4,
        color: '#FFA970',
    },
];

export const OVERVIEW_TEXT = {
    centerUserOverview: 'Center & User Overview',
    noDataFound: 'No Data Found',
    downloadReport: 'Download Report',
};
