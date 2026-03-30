export enum FluencyInformalFormalFormKeys {
    SPEECH_SAMPLES_MULTIPLE_CONTEXTS = 'speechSamplesMultipleContexts',
    SHUTTERING_SEVERITY_INSTRUMENT = 'stutteringSeverityInstrument',
    PARENT_TEACHER_RATING_SCALES = 'parentTeacherRatingScales',
    OBSERVATION_CHECKLISTS = 'observationalChecklists',
}

export type FluencyInformalFormalFormType = {
    [key in FluencyInformalFormalFormKeys]: string | number | boolean;
};
