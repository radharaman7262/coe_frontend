export enum SSDDiagnosisImpressionFormKeys {
    SPEECH_DISORDER = 'speechDiagnosis',
    LANGUAGE_PROFILE = 'languageProfile',
    COMMUNICATION_INTENT = 'functionalCommunication',
}

export type SDDiagnosisImpressionFormType = {
    [key in SSDDiagnosisImpressionFormKeys]: string | number | boolean;
};
