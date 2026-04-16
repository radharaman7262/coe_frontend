export const COLUMNS = [
    { header: 'Student ID', accessor: 'studentID' },
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Session Schedule', accessor: 'sessionSchedule' },
    { header: 'Session Status', accessor: 'sessionStatus' },
    { header: '', accessor: 'action' },
];

export const CENTRE_TRACKING_TEXT = {
    clear: 'Clear',
    searchByStaffName: 'Search by Student name',
};

export enum AssessmentStatusType {
    PENDING = '0',
    DONE = '1',
    SCHEDULED = '2',
}

export const STATUS_LABEL_MAP: Record<string, string> = {
    [AssessmentStatusType.PENDING]: 'Pending',
    [AssessmentStatusType.DONE]: 'Done',
    [AssessmentStatusType.SCHEDULED]: 'Scheduled',
};
