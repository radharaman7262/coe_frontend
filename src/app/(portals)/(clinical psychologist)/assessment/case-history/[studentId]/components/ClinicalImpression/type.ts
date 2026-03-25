export enum ClinicalImpressionFormKeys {
    BASED_ON_SPEECH_SAMPLE = 'basedOnSpeechSample',
    FLUENCY_DISORDER_IMPACT = 'fluencyDisorderImpact',
}

export type ClinicalImpressionFormType = {
    [key in ClinicalImpressionFormKeys]: string;
};
