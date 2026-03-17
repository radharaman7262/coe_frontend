import { JSX } from 'react';

import HomeIcon from '@/public/assets/svg/home-icon.svg';
import ListIcon from '@/public/assets/svg/list-icon.svg';
import UserIcon from '@/public/assets/svg/users-icon.svg';
import UserManagementIcon from '@/public/assets/svg/user-management-icon.svg';
import SessionIcon from '@public/assets/svg/calender-icon.svg';

export const ICON_MAP: Record<string, JSX.Element> = {
    Dashboard: HomeIcon,
    'Center Setup': ListIcon,
    'Center Admin': UserIcon,
    'User Type Management': UserManagementIcon,
    'Staff List': UserIcon,
    'Student List': ListIcon,
    Sessions: SessionIcon,
    Assessments: ListIcon,
    'Track Sessions': SessionIcon,
};
