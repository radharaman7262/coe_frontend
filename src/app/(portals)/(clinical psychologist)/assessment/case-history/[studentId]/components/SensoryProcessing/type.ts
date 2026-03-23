export type SensoryCheckboxGroup = {
    [key: string]: boolean;
};

export interface SensoryProcessingPayload {
    tactile: {
        avoidsTouch: boolean;
        seeksDeepPressure: boolean;
        failsToNoticeDirt: boolean;
        touchesObjectsExcessively: boolean;
    };

    vestibular: {
        avoidsSwings: boolean;
        seeksSpinning: boolean;
        poorBalance: boolean;
        getsDizzy: boolean;
    };

    proprioception: {
        seeksHeavyWork: boolean;
        bumpsIntoObjects: boolean;
        writesWithExcessPressure: boolean;
        clumsy: boolean;
    };

    auditory: {
        coversEars: boolean;
        doesNotRespond: boolean;
        seeksNoisyEnvironment: boolean;
    };

    visual: {
        avoidsBrightLights: boolean;
        staresAtLights: boolean;
        missesVisualDetails: boolean;
    };

    olfactory: {
        strongReactionToSmell: boolean;
        doesNotNoticeOdors: boolean;
        smellsObjects: boolean;
    };

    gustatory: {
        pickyEater: boolean;
        seeksChewing: boolean;
        limitedFoodRange: boolean;
    };

    interoception: {
        difficultyIdentifyingHunger: boolean;
        poorInternalAwareness: boolean;
        overreactsToDiscomfort: boolean;
    };

    additionalComments: string;
}
