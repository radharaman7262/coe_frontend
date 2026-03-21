import { SocialSkillsFormKeys, SocialSkillFormType } from './type';

export const INITIAL_STATE: SocialSkillFormType = {
    [SocialSkillsFormKeys.GENERAL]: '',
    [SocialSkillsFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    {
        label: 'Smiles at familiar people (by 6 weeks)',
        value: 'Smiles at familiar people (by 6 weeks)',
        key: 'smilesFamiliar',
    },
    {
        label: 'Stranger anxiety (by 6–9 months)',
        value: 'Stranger anxiety (by 6–9 months)',
        key: 'strangerAnxiety',
    },
    {
        label: 'Imitates others (by 12–15 months)',
        value: 'Imitates others (by 12–15 months)',
        key: 'imitatesOthers',
    },
    {
        label: 'Parallel play (by 2–2.5 years)',
        value: 'Parallel play (by 2–2.5 years)',
        key: 'parallelPlay',
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
        label: 'Recognizes others’ emotions (by 3.5–4 years)',
        value: 'Recognizes others’ emotions (by 3.5–4 years)',
        key: 'recognizesEmotions',
    },
    {
        label: 'Meltdowns/tantrums age-appropriate (<3 years)',
        value: 'Meltdowns/tantrums age-appropriate (<3 years)',
        key: 'tantrumsAppropriate',
    },
    {
        label: 'Manages emotions with support (by 4–5 years)',
        value: 'Manages emotions with support (by 4–5 years)',
        key: 'managesEmotions',
    },
];
