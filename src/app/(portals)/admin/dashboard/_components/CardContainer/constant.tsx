import TotalUserIcon from '@/public/assets/svg/cardIcon/blue-user-icon.svg';
import SessionIcon from '@/public/assets/svg/cardIcon/pink-session-file.svg';
import TotalStudentIcon from '@/public/assets/svg/cardIcon/green-cap.svg';

export const CARD_TEXT = {
    noDataFound: 'No Data Found',
};

export type StatsTitleKey = keyof typeof STATS_DETAIL_TITLE;

export const STATS_DETAIL_TITLE = {
    staff: 'Total Staff',
    students: 'Total Students',
    sessionConducted: 'Session conducted',
};

export const STATS_ICONS: Record<StatsTitleKey, string> = {
    students: TotalStudentIcon,
    staff: TotalUserIcon,
    sessionConducted: SessionIcon,
};
