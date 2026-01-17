import { JSX } from 'react';

import HomeIcon from '@/public/assets/svg/home-icon.svg';
import ListIcon from '@/public/assets/svg/list-icon.svg';
import UserIcon from '@/public/assets/svg/users-icon.svg';

export const ICON_MAP: Record<string, JSX.Element> = {
    Dashboard: HomeIcon,
    'Center Setup': ListIcon,
    'Center Admin': ListIcon,
    'User Type Management': UserIcon,
};
