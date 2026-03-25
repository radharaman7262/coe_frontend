export enum SeverityRatingFormKeys {
    EMOTIONAL_SOCIAL_IMPACT = 'stutteringSeverity',
    SLD = 'sldPercentage',
    NATURAL_OF_SPEECH = 'naturalnessOfSpeech',
    SPEECH_RATE = 'speechRate',
}

export type SeverityRatingFormType = {
    [key in SeverityRatingFormKeys]: string | number | boolean;
};