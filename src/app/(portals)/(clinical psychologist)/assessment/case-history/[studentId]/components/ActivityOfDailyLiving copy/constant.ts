import { ActivityOfDailyLivingFormKeys, ActivityOfDailyLivingFormType } from './type';

export const INITIAL_STATE: ActivityOfDailyLivingFormType = {
    [ActivityOfDailyLivingFormKeys.GENERAL]: '',
    [ActivityOfDailyLivingFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    {
        label: 'Bottle feeding stopped (by 12–15 months)',
        value: 'Bottle feeding stopped (by 12–15 months)',
        key: 'bottleStopped',
    },
    {
        label: 'Drinks from open cup (by 12–18 months)',
        value: 'Drinks from open cup (by 12–18 months)',
        key: 'drinksOpenCup',
    },
    {
        label: 'Uses spoon (by 15–18 months)',
        value: 'Uses spoon (by 15–18 months)',
        key: 'usesSpoon',
    },
    {
        label: 'Uses fork (by 2.5–3 years)',
        value: 'Uses fork (by 2.5–3 years)',
        key: 'usesFork',
    },
    {
        label: 'Chews various textures (by 18–24 months)',
        value: 'Chews various textures (by 18–24 months)',
        key: 'chewsTextures',
    },
    {
        label: 'Toileting awareness (by 2 years)',
        value: 'Toileting awareness (by 2 years)',
        key: 'toiletingAwareness',
    },
    {
        label: 'Daytime trained (by 3–3.5 years)',
        value: 'Daytime trained (by 3–3.5 years)',
        key: 'daytimeTrained',
    },
    {
        label: 'Nighttime trained (by 4–5 years)',
        value: 'Nighttime trained (by 4–5 years)',
        key: 'nightTrained',
    },
    {
        label: 'Undresses self (by 2.5–3 years)',
        value: 'Undresses self (by 2.5–3 years)',
        key: 'undressesSelf',
    },
    {
        label: 'Dresses self with assistance (by 3–4 years)',
        value: 'Dresses self with assistance (by 3–4 years)',
        key: 'dressesWithHelp',
    },
    {
        label: 'Brushes teeth with help (by 2.5–3 years)',
        value: 'Brushes teeth with help (by 2.5–3 years)',
        key: 'brushWithHelp',
    },
    {
        label: 'Brushes teeth independently (by 5–6 years)',
        value: 'Brushes teeth independently (by 5–6 years)',
        key: 'brushIndependent',
    },
    {
        label: 'Bathing/grooming independence (by 6–7 years)',
        value: 'Bathing/grooming independence (by 6–7 years)',
        key: 'groomingIndependence',
    },
];
