import { AssessmentStatusType } from '../type';

export const COLUMNS = [
    { header: 'Student ID', accessor: 'studentId' },
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Session Date & Time', accessor: 'sessionDate' },
    { header: 'Assigned Therapist', accessor: 'assignedTherapist' },
    { header: 'Session Status', accessor: 'sessionStatus' },
];

export const ASSESSMENT_TEXT = {
    assessment: 'Assessments',
    description: 'Simplify center creation and management—everything in one place.',
    noDataTitle: 'No Students added yet',
    noDataDescription:
        'Start building your team by adding psychologists, therapists, and educators here.',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [AssessmentStatusType.PENDING]: 'Pending',
    [AssessmentStatusType.DONE]: 'Done',
    [AssessmentStatusType.SCHEDULED]: 'Scheduled',
};
