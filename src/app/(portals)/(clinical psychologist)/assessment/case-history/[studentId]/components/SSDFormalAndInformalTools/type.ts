export enum SSDFormalAndInformalFormKeys {
    SPEECH_SAMPLE = 'speechSamples',
    FORMAL_TOOL_USED = 'formalToolsUsed',
    STIMULATION_CHECKED = 'stimulabilityChecked',
    ERROR_ANALYSIS_METHOD = 'errorAnalysisMethod',
}

export type SSDFormalAndInformalFormType = {
    [key in SSDFormalAndInformalFormKeys]: string | number | boolean;
};
