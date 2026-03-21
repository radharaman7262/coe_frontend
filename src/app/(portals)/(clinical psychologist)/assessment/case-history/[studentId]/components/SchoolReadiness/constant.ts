import { SchoolReadinessFormKeys, SchoolReadinessFormType } from './type';

export const INITIAL_STATE: SchoolReadinessFormType = {
    [SchoolReadinessFormKeys.GENERAL]: '',
    [SchoolReadinessFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    {
        label: 'Sits for 3–5 mins (by 2.5 years)',
        value: 'Sits for 3–5 mins (by 2.5 years)',
        key: 'sitsShortDuration',
    },
    {
        label: 'Sits for 10+ mins (by 4–5 years)',
        value: 'Sits for 10+ mins (by 4–5 years)',
        key: 'sitsLongDuration',
    },
    {
        label: 'Follows classroom routines (by 4–5 years)',
        value: 'Follows classroom routines (by 4–5 years)',
        key: 'followsRoutine',
    },
    {
        label: 'Copies from board (by 5–6 years)',
        value: 'Copies from board (by 5–6 years)',
        key: 'copiesFromBoard',
    },
    {
        label: 'Writes name (by 5 years)',
        value: 'Writes name (by 5 years)',
        key: 'writesName',
    },
    {
        label: 'Recognizes letters/numbers (by 4–5 years)',
        value: 'Recognizes letters/numbers (by 4–5 years)',
        key: 'recognizesLetters',
    },
    {
        label: 'Engages in group tasks (by 4–5 years)',
        value: 'Engages in group tasks (by 4–5 years)',
        key: 'groupTasks',
    },
    {
        label: 'Responds to praise/correction (by 3.5–4 years)',
        value: 'Responds to praise/correction (by 3.5–4 years)',
        key: 'respondsToPraise',
    },
];
