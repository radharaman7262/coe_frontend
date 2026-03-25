export enum CPDiagnosticImpressionFormKeys {
    SPEECH_DISORDER = 'motorSpeechDisorderSuspected',
    LANGUAGE_PROFILE = 'languageProfile',
    COMMUNICATION_INTENT = 'communicationIntent',
    SPEECH_INTELLIGIBILITY = 'speechIntelligibility',
    FUNCTIONAL_COMMUNICATION = 'functionalCommunication',
}

export type CPDiagnosticImpressionFormType = {
    [key in CPDiagnosticImpressionFormKeys]: string | number | boolean;
};
