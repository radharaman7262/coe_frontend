import React from 'react';

export interface DashboardCardData {
    title: string;
    count: number | string;
    icon: React.ElementType;
}

export interface StatsListType {
    activeStudents: string;
    center: string;
    sessionConducted: string;
    users: string;
}
