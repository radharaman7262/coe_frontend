export const STRUCTURE_FIELDS = [
    { field: 'face', options: ['Symmetrical', 'Asymmetrical'] },
    { field: 'jaw', options: ['Normal', 'Micro/Prognathic', 'Hypotonic'] },
    { field: 'tongue', options: ['Normal', 'Ankyloglossia', 'Deviated'] },
    { field: 'palate', options: ['Normal', 'High/Low arch', 'Cleft'] },
    { field: 'dentition', options: ['Normal', 'Malocclusion', 'Missing'] },
    { field: 'bite', options: ['Normal', 'Open', 'Cross', 'Overbite'] },
];

export const FUNCTION_FIELDS = [
    { field: 'lipClosure', options: ['Complete', 'Partial', 'Weak'] },
    { field: 'lipMovement', options: ['Adequate', 'Limited'] },
    { field: 'tongueMobility', options: ['Adequate', 'Reduced'] },
    { field: 'jawControl', options: ['Stable', 'Tremors', 'Limited ROM'] },
];

export const FUNCTION_FIELDS_TWO = [
    { field: 'cheekPuff', options: ['Maintains', 'Air escape'] },
    { field: 'softPalate', options: ['Symmetrical', 'Asymmetrical', 'Absent'] },
    { field: 'gag', options: ['Present', 'Absent', 'Hyper'] },
    { field: 'drooling', options: ['None', 'Occasional', 'Frequent', 'Continuous'] },
];

export const VEGITATIVE_FIELDS = [
    { field: 'sucking', options: ['Efficient', 'Weak', 'Absent'] },
    { field: 'swallowing', options: ['Safe', 'Delayed', 'Wet voice'] },
    { field: 'chewing', options: ['Rotary', 'Munching', 'Poor'] },
    { field: 'biting', options: ['Controlled', 'Avoids solids'] },
    { field: 'breathing', options: ['Nasal', 'Oral'] },
    { field: 'saliva', options: ['Adequate', 'Excessive'] },
    { field: 'nasalRegurgitation', options: ['Yes', 'No'] },
];
