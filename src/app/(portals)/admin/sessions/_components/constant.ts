import { SessionStatusType } from '../type';

export const COLUMNS = [
    { header: 'Student ID', accessor: 'studentId' },
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Session with', accessor: 'sessionWith' },
    { header: 'Session Schedule', accessor: 'sessionSchedule' },
    { header: 'Session Status', accessor: 'sessionStatus' },
];

export const STAFF_LIST_TEXT = {
    staffManagement: 'Session Management',
    description: 'Simplify center creation and management—everything in one place.',
    noDataTitle: 'No Session members added yet',
    noDataDescription:
        'Start building your team by adding psychologists, therapists, and educators here.',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [SessionStatusType.PENDING]: 'Pending',
    [SessionStatusType.DONE]: 'Done',
    [SessionStatusType.SCHEDULED]: 'Scheduled',
};
