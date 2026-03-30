export const structureFields = [
    { label: 'Face', field: 'face', options: ['Symmetrical', 'Asymmetrical'] },
    {
        label: 'Jaw',
        field: 'jaw',
        options: ['Normal', 'Micro/Prognathic', 'Hypotonic'],
    },
    {
        label: 'Tongue',
        field: 'tongue',
        options: ['Normal', 'Ankyloglossia', 'Deviated'],
    },
    {
        label: 'Palate',
        field: 'palate',
        options: ['Normal', 'High/Low arch', 'Cleft'],
    },
    {
        label: 'Dentition',
        field: 'dentition',
        options: ['Normal', 'Malocclusion', 'Missing'],
    },
    {
        label: 'Bite',
        field: 'bite',
        options: ['Normal', 'Open', 'Cross', 'Overbite'],
    },
];

export const functionFields = [
    {
        label: 'Lip Closure',
        field: 'lipClosure',
        options: ['Complete', 'Partial', 'Weak'],
    },
    {
        label: 'Lip Movement',
        field: 'lipMovement',
        options: ['Adequate', 'Limited'],
    },
    {
        label: 'Tongue Mobility',
        field: 'tongueMobility',
        options: ['Adequate', 'Reduced'],
    },
    {
        label: 'Jaw Control',
        field: 'jawControl',
        options: ['Stable', 'Tremors', 'Limited ROM'],
    },
];

export const functionFieldsTwo = [
    {
        label: 'Cheek Puff',
        field: 'cheekPuff',
        options: ['Maintains', 'Air escape'],
    },
    {
        label: 'Soft Palate',
        field: 'softPalate',
        options: ['Symmetrical', 'Asymmetrical', 'Absent'],
    },
    { label: 'Gag', field: 'gag', options: ['Present', 'Absent', 'Hyper'] },
    {
        label: 'Drooling',
        field: 'drooling',
        options: ['None', 'Occasional', 'Frequent', 'Continuous'],
    },
];

export const vegetativeFields = [
    {
        label: 'Sucking',
        field: 'sucking',
        options: ['Efficient', 'Weak', 'Absent'],
    },
    {
        label: 'Swallowing',
        field: 'swallowing',
        options: ['Safe', 'Delayed', 'Wet voice'],
    },
    {
        label: 'Chewing',
        field: 'chewing',
        options: ['Rotary', 'Munching', 'Poor'],
    },
    {
        label: 'Biting',
        field: 'biting',
        options: ['Controlled', 'Avoids solids'],
    },
    { label: 'Breathing', field: 'breathing', options: ['Nasal', 'Oral'] },
    { label: 'Saliva', field: 'saliva', options: ['Adequate', 'Excessive'] },
    {
        label: 'Nasal Regurgitation',
        field: 'nasalRegurgitation',
        options: ['Yes', 'No'],
    },
];
