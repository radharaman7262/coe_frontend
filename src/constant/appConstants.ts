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

export const PASSWORD_MIN_LENGTH = 8;

export const USER_NAME_MIN_LENGTH = 10;

export const PASSWORD_MAX_LENGTH = 30;

export const USER_NAME_MAX_LENGTH = 50;
