export enum DiagnosticImpressionFormKeys {
    SPEECH_DIAGNOSIS = 'speechDiagnosis',
    LANGUAGE_DIAGNOSIS = 'languageDiagnosis',
    FUNCTIONAL_COMMUNICATION = 'functionalCommunication',
}

export type DiagnosticImpressionFormType = {
    [key in DiagnosticImpressionFormKeys]: string | number | boolean;
};
