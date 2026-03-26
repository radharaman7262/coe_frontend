/* eslint-disable @typescript-eslint/no-explicit-any */

export const INITIAL_STATE: Record<string, string | Record<string, boolean | string>> = {
    tactile: {
        avoidsTouch: false,
        seeksDeepPressure: false,
        failsToNoticeDirt: false,
        touchesObjectsExcessively: false,
    },

    vestibular: {
        avoidsSwings: false,
        seeksSpinning: false,
        poorBalance: false,
        getsDizzy: false,
    },

    proprioception: {
        seeksHeavyWork: false,
        bumpsIntoObjects: false,
        writesWithExcessPressure: false,
        clumsy: false,
    },

    auditory: {
        coversEars: false,
        doesNotRespond: false,
        seeksNoisyEnvironment: false,
    },

    visual: {
        avoidsBrightLights: false,
        staresAtLights: false,
        missesVisualDetails: false,
    },

    olfactory: {
        strongReactionToSmell: false,
        doesNotNoticeOdors: false,
        smellsObjects: false,
    },

    gustatory: {
        pickyEater: false,
        seeksChewing: false,
        limitedFoodRange: false,
    },

    interoception: {
        difficultyIdentifyingHunger: false,
        poorInternalAwareness: false,
        overreactsToDiscomfort: false,
    },

    additionalComments: '',
};

export const DATA = [
    {
        title: 'Tactile (Touch)',
        key: 'tactile',
        items: [
            { label: 'Avoids being touched (tags, grooming, hugs)', key: 'avoidsTouch' },
            { label: 'Seeks deep pressure (tight hugs, crashing)', key: 'seeksDeepPressure' },
            { label: 'Fails to notice dirt, food on face', key: 'failsToNoticeDirt' },
            { label: 'Excessively touches objects/people', key: 'touchesObjectsExcessively' },
        ],
    },
    {
        title: 'Vestibular (Movement)',
        key: 'vestibular',
        items: [
            { label: 'Avoids swings, escalators, elevators', key: 'avoidsSwings' },
            { label: 'Seeks spinning, swinging constantly', key: 'seeksSpinning' },
            { label: 'Poor balance or frequent falls', key: 'poorBalance' },
            { label: 'Gets dizzy easily or avoids head movements', key: 'getsDizzy' },
        ],
    },
    {
        title: 'Proprioception',
        key: 'proprioception',
        items: [
            { label: 'Seeks crashing, pushing, pulling', key: 'seeksHeavyWork' },
            { label: 'Bumps into people or furniture', key: 'bumpsIntoObjects' },
            { label: 'Writes with excessive pressure', key: 'writesWithExcessPressure' },
            { label: 'Poor body awareness, clumsy', key: 'clumsy' },
        ],
    },
    {
        title: 'Auditory',
        key: 'auditory',
        items: [
            {
                key: 'coversEars',
                label: 'Covers ears to sounds like vacuum, alarms, loud music',
            },
            {
                key: 'doesNotRespond',
                label: "Doesn't respond to name or spoken instructions",
            },
            {
                key: 'seeksNoisyEnvironment',
                label: 'Seeks noisy environments or makes frequent loud sounds',
            },
        ],
    },
    {
        title: 'Visual',
        key: 'visual',
        items: [
            {
                key: 'avoidsBrightLights',
                label: 'Avoids bright lights, visually busy environments',
            },
            {
                key: 'staresAtLights',
                label: 'Stares at spinning items, flickering lights',
            },
            {
                key: 'missesVisualDetails',
                label: 'Misses visual details (e.g locating items, copying from board)',
            },
        ],
    },
    {
        title: 'olfactory',
        key: 'olfactory',
        items: [
            {
                key: 'strongReactionToSmell',
                label: 'Strong reactions to smells (covers nose, gags)',
            },
            {
                key: 'doesNotNoticeOdors',
                label: "Doesn't notice strong or foul odors",
            },
            {
                key: 'smellsObjects',
                label: 'Smells objects, people, clothing',
            },
        ],
    },
    {
        key: 'gustatory',
        title: 'Gustatory (Taste)',
        items: [
            {
                key: 'pickyEater',
                label: 'Picky eater, avoids certain textures, gag reflex',
            },
            {
                key: 'seeksChewing',
                label: 'Seeks chewing, mouthing non-food objects',
            },
            {
                key: 'limitedFoodRange',
                label: 'Limited food range or excessive food intake',
            },
        ],
    },
    {
        key: 'interoception',
        title: 'Interoception',
        items: [
            {
                key: 'difficultyIdentifyingHunger',
                label: 'Difficulty identifying hunger, thirst, need to use toilet',
            },
            {
                key: 'poorInternalAwareness',
                label: 'Poor awareness of internal states (pain, temperature)',
            },
            {
                key: 'overreactsToDiscomfort',
                label: 'Overreacts to minor discomfort (tight clothes, small injuries)',
            },
        ],
    },
];
export const mapApiToFormValues = (apiData: any): any => ({
    studentId: apiData?.studentId ?? 0,

    tactile: {
        avoidsTouch: apiData?.tactile?.avoidsTouch ?? false,
        seeksDeepPressure: apiData?.tactile?.seeksDeepPressure ?? false,
        failsToNoticeDirt: apiData?.tactile?.failsToNoticeDirt ?? false,
        touchesObjectsExcessively: apiData?.tactile?.touchesObjectsExcessively ?? false,
    },

    vestibular: {
        avoidsSwings: apiData?.vestibular?.avoidsSwings ?? false,
        seeksSpinning: apiData?.vestibular?.seeksSpinning ?? false,
        poorBalance: apiData?.vestibular?.poorBalance ?? false,
        getsDizzy: apiData?.vestibular?.getsDizzy ?? false,
    },

    proprioception: {
        seeksHeavyWork: apiData?.proprioception?.seeksHeavyWork ?? false,
        bumpsIntoObjects: apiData?.proprioception?.bumpsIntoObjects ?? false,
        writesWithExcessPressure: apiData?.proprioception?.writesWithExcessPressure ?? false,
        clumsy: apiData?.proprioception?.clumsy ?? false,
    },

    auditory: {
        coversEars: apiData?.auditory?.coversEars ?? false,
        doesNotRespond: apiData?.auditory?.doesNotRespond ?? false,
        seeksNoisyEnvironment: apiData?.auditory?.seeksNoisyEnvironment ?? false,
    },

    visual: {
        avoidsBrightLights: apiData?.visual?.avoidsBrightLights ?? false,
        staresAtLights: apiData?.visual?.staresAtLights ?? false,
        missesVisualDetails: apiData?.visual?.missesVisualDetails ?? false,
    },

    olfactory: {
        strongReactionToSmell: apiData?.olfactory?.strongReactionToSmell ?? false,
        doesNotNoticeOdors: apiData?.olfactory?.doesNotNoticeOdors ?? false,
        smellsObjects: apiData?.olfactory?.smellsObjects ?? false,
    },

    gustatory: {
        pickyEater: apiData?.gustatory?.pickyEater ?? false,
        seeksChewing: apiData?.gustatory?.seeksChewing ?? false,
        limitedFoodRange: apiData?.gustatory?.limitedFoodRange ?? false,
    },

    interoception: {
        difficultyIdentifyingHunger: apiData?.interoception?.difficultyIdentifyingHunger ?? false,
        poorInternalAwareness: apiData?.interoception?.poorInternalAwareness ?? false,
        overreactsToDiscomfort: apiData?.interoception?.overreactsToDiscomfort ?? false,
    },

    additionalComments: apiData?.additionalComments ?? '',
    percentage: apiData?.percentage ?? 0,
});
