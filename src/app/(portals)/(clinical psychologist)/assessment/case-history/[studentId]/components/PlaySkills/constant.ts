import { PlaySkillFormKeys, PlaySkillFormType } from './type';

export const INITIAL_STATE: PlaySkillFormType = {
    [PlaySkillFormKeys.GENERAL]: '',
    [PlaySkillFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    {
        label: 'Exploratory play (by 6–9 months)',
        value: 'Exploratory play (by 6–9 months)',
        key: 'exploratoryPlay ',
    },
    {
        label: 'Functional play (by 12 months)',
        value: 'Functional play (by 12 months)',
        key: 'functionalPlay',
    },
    {
        label: 'Imitates others (by 12–15 months)',
        value: 'Imitates others (by 12–15 months)',
        key: 'imitatesOthers',
    },
    {
        label: 'Constructive play (by 2 years)',
        value: 'Constructive play (by 2 years)',
        key: 'constructivePlay',
    },
    {
        label: 'Group play (by 3–3.5 years)',
        value: 'Group play (by 3–3.5 years)',
        key: 'groupPlay',
    },
    {
        label: 'Pretend play (by 2.5–3 years)',
        value: 'Pretend play (by 2.5–3 years)',
        key: 'pretendPlay',
    },
    {
        label: 'Pretend/imaginative play (by 2.5–3 years)',
        value: 'Pretend/imaginative play (by 2.5–3 years)',
        key: 'imaginativePlay',
    },
    {
        label: 'Cooperative play (by 4–5 years)',
        value: 'Cooperative play (by 4–5 years)',
        key: 'cooperativePlay',
    },
    {
        label: 'Follows play rules (by 5–6 years)',
        value: 'Follows play rules (by 5–6 years)',
        key: 'flollowsPlay',
    },
    {
        label: 'Sustains attention in play (by 3–4 years)',
        value: 'Sustains attention in play (by 3–4 years)',
        key: 'sustainsAttention',
    },
];
