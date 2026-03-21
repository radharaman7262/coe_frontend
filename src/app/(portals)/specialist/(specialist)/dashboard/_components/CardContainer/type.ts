import React from 'react';

export interface DashboardCardData {
    title: string;
    count: number | string;
    icon: React.ElementType;
}

export interface StatsSpecialEducatorListType {
    assignedStudents: string;
    goalNotSet: string;
    assessmentPending: string;
}
