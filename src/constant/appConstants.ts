import { SessionStatusType } from '@/app/(portals)/admin/sessions/type';

export enum StaleAndCacheTime {
    STALE_TIME = 30 * 60 * 1000,
    CACHE_TIME = 40 * 60 * 1000,
}

export const MODAL_STYLING = {
    '& .MuiDialog-container': {
        background: 'rgba(0, 0, 0, 0.50)',
    },
    '& .MuiPaper-root': {
        borderRadius: '12px',
        minWidth: '348px',
    },
};

export const ZERO_DATA = 0;

export const EIGHT_MIN_LENGTH = 8;

export const TEN_MIN_LENGTH = 10;

export const THIRTY_MAX_LENGTH = 30;

export const DEBOUNCE_SEARCH_TIME = 1500;

export const LOADING_TIME_DURATION = 2000;

export const FIFTY_MAX_LENGTH = 50;

export const THREE_MIN_LENGTH = 3;

export const TWO_MIN_LENGTH = 2;

export enum StatusNumber {
    ACTIVE = 1,
    INACTIVE = 0,
}

export enum StatusNumberString {
    ACTIVE = '1',
    INACTIVE = '0',
}

export const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export const STATIC_GENDER = [
    { id: 1, name: Gender.Male },
    { id: 2, name: Gender.Female },
    { id: 3, name: Gender.Other },
];

export interface StatusDataType {
    id: string;
    name: string;
}

export const STATIC_STATUS = [
    { id: SessionStatusType.PENDING, name: 'Pending' },
    { id: SessionStatusType.DONE, name: 'Done' },
    { id: SessionStatusType.SCHEDULED, name: 'Scheduled' },
];

export const generateNext30Dates = () => {
    const dates = [];

    for (let i = 0; i < 30; i += 1) {
        const date = new Date();
        date.setDate(date.getDate() + i);

        dates.push({
            id: date.toISOString(),
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            date: date.getDate(),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            fullDate: date,
        });
    }

    return dates;
};
