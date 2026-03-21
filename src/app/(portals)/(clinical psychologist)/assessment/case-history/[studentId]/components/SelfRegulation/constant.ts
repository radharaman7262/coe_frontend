import { SelfRegulationFormType, SelfRegulationFormKeys } from './type';

export const INITIAL_STATE: SelfRegulationFormType = {
    [SelfRegulationFormKeys.BEHAVIOURS]: '',
};

export const OPTIONS = [
    { label: 'Reaches for toys (by 4–6 months)', value: 'reachesForToys', key: 'reachesForToys' },
    {
        label: 'Rakes small objects (by 6–7 months)',
        value: 'rakesSmallObjects',
        key: 'rakesSmallObjects',
    },
    { label: 'Pincer grasp (by 9–12 months)', value: 'pincerGrasp', key: 'pincerGrasp' },
    { label: 'Scribbles spontaneously (by 12–18 months)', value: 'scribbles', key: 'scribbles' },
    { label: 'Turns pages of book (by 18–24 months)', value: 'turnsPages', key: 'turnsPages' },
    {
        label: 'Builds 4-block tower (by 24 months)',
        value: 'buildsBlockTower',
        key: 'buildsBlockTower',
    },
    {
        label: 'Copies vertical & horizontal lines (by 2–2.5 years)',
        value: 'copiesLines',
        key: 'copiesLines',
    },
    { label: 'Copies circle (by 3 years)', value: 'copiesCircle', key: 'copiesCircle' },
    { label: 'Cuts paper with scissors (by 3.5–4 years)', value: 'cutsPaper', key: 'cutsPaper' },
    {
        label: 'In-hand manipulation (by 4–5 years)',
        value: 'inHandManipulation',
        key: 'inHandManipulation',
    },
    {
        label: 'Copies square/triangle (by 4–5 years)',
        value: 'copiesShapes',
        key: 'copiesShapes',
    },
    {
        label: 'Uses mature tripod grasp (by 4.5–6 years)',
        value: 'tripodGrasp',
        key: 'tripodGrasp',
    },
];
