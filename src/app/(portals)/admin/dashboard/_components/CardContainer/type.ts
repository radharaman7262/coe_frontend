import React from 'react';

export interface DashboardCardData {
    title: string;
    count: number | string;
    icon: React.ElementType;
}

export interface StatsAdminListType {
    staff: string;
    students: string;
    sessionConducted: string;
}
