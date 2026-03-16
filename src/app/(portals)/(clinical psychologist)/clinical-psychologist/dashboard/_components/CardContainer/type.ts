import React from 'react';

export interface DashboardCardData {
    title: string;
    count: number | string;
    icon: React.ElementType;
}

export interface StatsPsychologistListType {
    assessmentDue: number;
    assignedStudents: string;
    historyForm: string;
}
