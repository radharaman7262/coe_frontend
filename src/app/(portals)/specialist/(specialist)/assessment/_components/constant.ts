import { AssessmentStatusType } from '../type';

export const COLUMNS = [
    { header: 'Name/Age/Gender', accessor: 'nameAgeGender' },
    { header: 'Psychologist report', accessor: 'psychologistReport' },
    { header: 'Session Date & Time', accessor: 'sessionDate' },
    { header: 'Session Status', accessor: 'sessionStatus' },
    { header: '', accessor: 'action' },
    { header: '', accessor: 'edit' },
];

export const ASSESSMENT_TEXT = {
    assessment: 'Assessments',
    description: 'Simplify center creation and management—everything in one place.',
    noDataTitle: 'No Students added yet',
    noDataDescription: 'Start building your team by adding stuednts here.',
    caseHistory: 'Case History',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [AssessmentStatusType.PENDING]: 'Pending',
    [AssessmentStatusType.SCHEDULED]: 'Scheduled',
};
