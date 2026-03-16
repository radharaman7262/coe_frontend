import { SessionStatusType } from '../../sessions/type';

export const COLUMNS = [
    { header: 'Student ID', accessor: 'studentId' },
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Session Schedule', accessor: 'sessionSchedule' },
    { header: 'Assigned Psycholgist', accessor: 'assignedPsychologist' },
    { header: 'Session Status', accessor: 'sessionStatus' },
];

export const STUDENT_LIST_TEXT = {
    studentList: 'Student List',
    description: 'Simplify center creation and management—everything in one place.',
    createStudent: 'Add Student',
    clear: 'Clear',
    noDataTitle: 'No student records yet',
    noDataDescription: 'Add your first student to get started.',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [SessionStatusType.PENDING]: 'Pending',
    [SessionStatusType.DONE]: 'Done',
    [SessionStatusType.SCHEDULED]: 'Scheduled',
};
