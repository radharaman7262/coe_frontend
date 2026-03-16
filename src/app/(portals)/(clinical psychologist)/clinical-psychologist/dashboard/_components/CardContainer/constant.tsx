import HistoryIcon from '@/public/assets/svg/history-icon.svg';
import AssessmentIcon from '@/public/assets/svg/cardIcon/pink-session-file.svg';
import AssignedStudentIcon from '@/public/assets/svg/cardIcon/green-cap.svg';

export const CARD_TEXT = {
    noDataFound: 'No Data Found',
};

export type StatsTitleKey = keyof typeof STATS_DETAIL_TITLE;

export const STATS_DETAIL_TITLE = {
    assessmentDue: 'Assessments Due',
    assignedStudents: 'Assigned Students',
    historyForm: 'History Form',
};

export const STATS_ICONS: Record<StatsTitleKey, string> = {
    assessmentDue: AssessmentIcon,
    assignedStudents: AssignedStudentIcon,
    historyForm: HistoryIcon,
};
