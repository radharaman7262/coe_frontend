import TotalCenterIcon from '@/public/assets/svg/total-center-icon.svg';
import TotalUserIcon from '@/public/assets/svg/total-user-icon.svg';
import ActiveStudentIcon from '@/public/assets/svg/cardIcon/green-cap.svg';
import SessionIcon from '@/public/assets/svg/session-conducted-icon.svg';

export const CARD_TEXT = {
    noDataFound: 'No Data Found',
};

export type StatsTitleKey = keyof typeof STATS_DETAIL_TITLE;

export const STATS_DETAIL_TITLE = {
    activeStudents: 'Active Students',
    center: 'Total Centers',
    sessionConducted: 'Session conducted',
    users: 'Total Users',
};

export const STATS_ICONS: Record<StatsTitleKey, string> = {
    activeStudents: ActiveStudentIcon,
    center: TotalCenterIcon,
    sessionConducted: SessionIcon,
    users: TotalUserIcon,
};
