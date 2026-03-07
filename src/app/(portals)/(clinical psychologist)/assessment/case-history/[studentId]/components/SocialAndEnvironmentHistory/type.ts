export enum SocialEnvironmentalHistoryFormKeys {
    STUDENT_ID = 'studentId',

    PEER_RELATIONSHIPS = 'peerRelationships',
    INTERACTION_WITH_ADULTS = 'interactionWithAdults',
    BEHAVIORAL_ISSUES = 'behavioralIssues',
    INTERESTS_AND_HOBBIES = 'interestsAndHobbies',
    SLEEPING_HABITS = 'sleepingHabits',
    SCREEN_TIME = 'screenTime',
    ADAPTABILITY_TO_CHANGES = 'adaptabilityToChanges',
}

export type SocialEnvironmentalHistoryFormType = {
    [key in SocialEnvironmentalHistoryFormKeys]: string;
};

export type HomeEnvironmentErrorMessagesType = {
    [key in SocialEnvironmentalHistoryFormKeys]?: string;
};
