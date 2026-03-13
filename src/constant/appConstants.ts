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

export const ELEVEN_MAX_LENGTH = 11;

export const THIRTY_MAX_LENGTH = 30;

export const THREE_HUNDRED_MAX_LENGTH = 300;

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
// eslint-disable-next-line max-len
export const PYSCHCOLOGIST_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NCIsImVtYWlsIjoicGFyYXNAYXVyb3NvY2lldHkub3JnIiwicm9sZUlkIjoiMyIsInNwZWNpYWxpemF0aW9uSWQiOiIyIiwidXNlclR5cGVJZCI6IjQiLCJpYXQiOjE3NzM1NTY0MTUsImV4cCI6MTc3MzY0MjgxNX0.Rn8sp2RaJp6m0-DtKOAF0Eshnjzp4-EFI6Mo-f55mjc`;
export enum SchoolType {
    NO_SCHOOL = 'No School',
    HOME_SCHOOL = 'Home School',
    PLAY_SCHOOL = 'Play School',
    GOVT_SCHOOL = 'Govt. School',
    PVT_SCHOOL = 'Pvt. School',
}

export const STATIC_SCHOOL_TYPE = [
    { id: 1, name: SchoolType.NO_SCHOOL },
    { id: 2, name: SchoolType.HOME_SCHOOL },
    { id: 3, name: SchoolType.PLAY_SCHOOL },
    { id: 4, name: SchoolType.GOVT_SCHOOL },
    { id: 5, name: SchoolType.PVT_SCHOOL },
];

export enum OccupationType {
    GOVT_SERVICE = 'Government Service',
    PRIVATE_SECTOR = 'Private Sector/Job',
    BUSINESS = 'Business',
    SELF_EMPLOYED = 'Self Employed',
    AGRICULTURE = 'Agriculture/Farmer',
}

export const STATIC_OCCUPATION_TYPE = [
    { id: 1, name: OccupationType.GOVT_SERVICE },
    { id: 2, name: OccupationType.PRIVATE_SECTOR },
    { id: 3, name: OccupationType.BUSINESS },
    { id: 4, name: OccupationType.SELF_EMPLOYED },
    { id: 5, name: OccupationType.AGRICULTURE },
];

export enum SiblingType {
    YES = 'Yes',
    NO = 'No',
}

export const STATIC_SIBLING_TYPE = [
    { id: 1, name: SiblingType.YES },
    { id: 2, name: SiblingType.NO },
];
