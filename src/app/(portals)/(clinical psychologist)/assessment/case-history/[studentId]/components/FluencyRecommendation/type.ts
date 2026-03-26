export enum RecommendationFormKeys {
    THERAPY = 'therapies',
    THERAPY_FREQUENCY = 'therapyFrequency',
    PARENT_ID = 'parnetFormId',
}

export type RecommendationFormType = {
    [key in RecommendationFormKeys]: string | number | boolean;
};
