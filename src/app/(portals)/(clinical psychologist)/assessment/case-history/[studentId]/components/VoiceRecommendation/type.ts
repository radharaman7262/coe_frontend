export enum VoiceRecommendationSchemaFormKeys {
    THERAPIES = 'therapies',
}

export type VoiceRecommendationFormType = {
    [key in VoiceRecommendationSchemaFormKeys]: string;
};
