import { CognitiveAndPerceptualFormKeys, CognitiveAndPerceptualFormType } from './type';

export const INITIAL_STATE: CognitiveAndPerceptualFormType = {
    [CognitiveAndPerceptualFormKeys.SELECTED_OPTIONS]: '',
};

export const OPTIONS = [
    {
        label: 'Follows single-step command (by 12–18 months)',
        value: 'Follows single-step command (by 12–18 months)',
        key: 'followsSingleStepCommand',
    },
    {
        label: 'Follows two-step command (by 2–2.5 years)',
        value: 'Follows two-step command (by 2–2.5 years)',
        key: 'followsTwoStepCommand',
    },
    {
        label: 'Identifies common objects (by 18–24 months)',
        value: 'Identifies common objects (by 18–24 months)',
        key: 'identifiesCommonObjects',
    },
    {
        label: 'Matches objects/shapes (by 2–2.5 years)',
        value: 'Matches objects/shapes (by 2–2.5 years)',
        key: 'matchesObjectsShapes',
    },
    {
        label: 'Begins sequencing (by 3–3.5 years)',
        value: 'Begins sequencing (by 3–3.5 years)',
        key: 'beginsSequencing',
    },
    {
        label: 'Solves simple problems (by 3.5–4 years)',
        value: 'Solves simple problems (by 3.5–4 years)',
        key: 'solvesSimpleProblems',
    },
    {
        label: 'Recognizes self in mirror (by 18 months)',
        value: 'Recognizes self in mirror (by 18 months)',
        key: 'recognizesSelfInMirror',
    },
    {
        label: 'Concept of big/small, in/out (by 3.5–4 years)',
        value: 'Concept of big/small, in/out (by 3.5–4 years)',
        key: 'conceptBigSmallInOut',
    },
    {
        label: 'Recognizes numbers, letters (by 4–5 years)',
        value: 'Recognizes numbers, letters (by 4–5 years)',
        key: 'recognizesNumbersLetters',
    },
    {
        label: 'Visual discrimination (by 4–5 years)',
        value: 'Visual discrimination (by 4–5 years)',
        key: 'visualDiscrimination',
    },
    {
        label: 'Body awareness (developing through 5–6 years)',
        value: 'Body awareness (developing through 5–6 years)',
        key: 'bodyAwareness',
    },
];
