export enum FormalAndInformalFormKeys {
    SPEECH_SAMPLE = 'speechSample',
    NASOMETRY = 'nasometry',
    MIRROR_SEE_SCAPE_CHECKS = 'mirrorSeeScapeChecks',
    FORMAL_ARTICULATION_TOOLS = 'formalArticulationTools',
}

export type FormalAndInformalFormType = {
    [key in FormalAndInformalFormKeys]: string | number | boolean;
};