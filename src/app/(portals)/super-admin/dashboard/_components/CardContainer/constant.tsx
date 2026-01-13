import TotalCenterIcon from '@/public/assets/svg/total-center-icon.svg';
import TotalUserIcon from '@/public/assets/svg/total-user-icon.svg';
import ActiveStudentIcon from '@/public/assets/svg/cardIcon/green-cap.svg';
import SessionIcon from '@/public/assets/svg/session-conducted-icon.svg';

import { DashboardCardData } from './type';

export const DUMMY_RESPONSE: DashboardCardData[] = [
    { title: 'Total Centers', count: 12, icon: TotalCenterIcon },
    { title: 'Total Users', count: '21', icon: TotalUserIcon },
    { title: 'Active Students', count: '23', icon: ActiveStudentIcon },
    { title: 'Session conducted', count: '31', icon: SessionIcon },
];

export const CARD_TEXT = {
    noDataFound: 'No Data Found',
};
