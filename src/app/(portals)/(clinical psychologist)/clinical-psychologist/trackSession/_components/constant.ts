import { TrackSessionStatusType } from '../type';

export const COLUMNS = [
    { header: 'Student ID', accessor: 'studentId' },
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Session with', accessor: 'sessionWith' },
    { header: 'Session Schedule', accessor: 'sessionSchedule' },
    { header: 'Session Status', accessor: 'sessionStatus' },
    { header: 'Action', accessor: 'action' }, 
];

export const TRACK_SESSION_TEXT = {
    trackSessions: 'Track Sessions',
    description: 'Simplify center creation and management—everything in one place.',
    noDataTitle: 'No Students added yet',
    noDataDescription:
        'Start building your team by adding psychologists, therapists, and educators here.',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [TrackSessionStatusType.PENDING]: 'Pending',
    [TrackSessionStatusType.DONE]: 'Done',
    [TrackSessionStatusType.SCHEDULED]: 'Scheduled',
};
