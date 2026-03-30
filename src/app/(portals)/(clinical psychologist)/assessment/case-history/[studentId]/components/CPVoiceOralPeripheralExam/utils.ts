/* eslint-disable @typescript-eslint/no-explicit-any */
const structureKeys = ['face', 'jaw', 'tongue', 'palate', 'dentition', 'bite'];

const functionKeys = [
    'lipClosure',
    'lipMovement',
    'tongueMobility',
    'jawControl',
    'cheekPuff',
    'softPalate',
    'gag',
    'drooling',
];

const vegetativeKeys = [
    'sucking',
    'swallowing',
    'chewing',
    'biting',
    'breathing',
    'saliva',
    'nasalRegurgitation',
];

export const calculatePercentage = (form: any): number => {
    let total = 0;
    let filled = 0;

    const count = (value: boolean) => {
        total += 1;
        if (value) filled += 1;
    };

    // ---------- RECEPTIVE ----------
    structureKeys.forEach((key) => {
        count(form.structure[key]);
    });

    vegetativeKeys.forEach((key) => {
        count(form.vegetativeSkills[key]);
    });

    functionKeys.forEach((key) => {
        count(form.function[key]);
    });

    return total === 0 ? 0 : Math.round((filled / total) * 100);
};
