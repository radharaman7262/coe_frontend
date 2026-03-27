/* eslint-disable @typescript-eslint/no-explicit-any */
export const DISFLUENCY_KEYS = [
    {
        key: 'partWordRepetition',
        label: 'Part-word repetitions ("b-b-ball")',
    },
    {
        key: 'wholeWordRepetition',
        label: 'Whole-word repetitions ("my-my")',
    },
    {
        key: 'phraseRepetition',
        label: 'Phrase repetitions ("I want-I want")',
    },
    {
        key: 'prolongations',
        label: 'Prolongations ("sssss")',
    },
    {
        key: 'blocks',
        label: 'Blocks (audible/in-audible)',
    },
];

export const mapFluencyCharacteristics = (data: any) => {
    const mapped: any = {
        typeOfDisfluency: {},
        speechRate: data?.speechRate?.value || '',
        clutteringSigns: {
            rapidRate: !!data?.clutteringSigns?.rapidRate,
            collapsingSyllables: !!data?.clutteringSigns?.collapsingSyllables,
            disorganizedContent: !!data?.clutteringSigns?.disorganizedContent,
        },
    };

    const disfluency = data?.typeOfDisfluency || {};

    Object.keys(disfluency).forEach((key) => {
        mapped.typeOfDisfluency[key] = {
            frequency: disfluency[key]?.frequency?.value || '',
            severity: disfluency[key]?.severity || '',
            comment: disfluency[key]?.comment || '',
        };
    });

    return mapped;
};
