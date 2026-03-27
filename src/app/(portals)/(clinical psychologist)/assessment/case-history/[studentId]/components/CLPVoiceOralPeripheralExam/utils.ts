import { FormState } from './type';

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

export const calculatePercentage = (form: FormState, ddk: string) => {
    let filled = 0;
    let total = 0;

    // ✅ STRUCTURE
    structureKeys.forEach((key) => {
        total += 1;
        if (form.structure[key]) filled += 1;
    });

    // ✅ FUNCTION
    functionKeys.forEach((key) => {
        total += 1;
        if (form.function[key]) filled += 1;
    });

    // ✅ DDK
    total += 1;
    if (ddk) filled += 1;

    // ✅ VEGETATIVE
    vegetativeKeys.forEach((key) => {
        total += 1;
        if (form.vegetativeSkills[key]) filled += 1;
    });

    return Math.round((filled / total) * 100);
};
