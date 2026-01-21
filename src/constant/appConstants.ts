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

export const PASSWORD_MIN_LENGTH = 8;

export const USER_NAME_MIN_LENGTH = 10;

export const PASSWORD_MAX_LENGTH = 30;

export const USER_NAME_MAX_LENGTH = 50;

export const DEBOUNCE_SEARCH_TIME = 1500;

export const LOADING_TIME_DURATION = 2000;

export enum UserStatusNumber {
    ACTIVE = 1,
    INACTIVE = 0,
}

export enum UserStatusString {
    ACTIVE = '1',
    INACTIVE = '0',
}

export enum RoleMasterStatusNumber {
    ACTIVE = 1,
    INACTIVE = 0,
}

export enum MenuMasterStatusNumber {
    ACTIVE = 1,
    INACTIVE = 0,
}

export const ROLE_LENGTH = 30;
