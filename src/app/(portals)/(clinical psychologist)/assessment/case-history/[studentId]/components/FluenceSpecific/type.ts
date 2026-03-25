export enum FluencyCaseHistoryKeys {
    ONSET = 'onsetOfDisfluency',
    DEVELOPMENT_PATTERN = 'developmentPattern',
    FAMILY_HISTORY = 'familyHistoryOfStuttering',
    SPEECH_PATTERN = 'speechPatternsHomeSchool',
    TRIGGER_SITUATIONS = 'triggerSituations',
    AWARENESS = 'awarenessOfDisfluency',
    REACTION = 'familyPeersReaction',
    PREVIOUS_THERAPY = 'previousTherapyIfAny',
    ASSOCIATED_CONCERNS = 'associatedConcerns',
}

export type FluencyCaseHistoryFormType = {
    [key in FluencyCaseHistoryKeys]: string;
};