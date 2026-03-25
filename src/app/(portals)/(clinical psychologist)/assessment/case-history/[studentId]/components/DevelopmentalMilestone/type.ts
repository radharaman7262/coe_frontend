export enum DevelopmentalMilestoneFormKeys {
    MOTOR_MILESTONE = 'motorMilestone',
    SPEECH_LANGUAGE_MILESTONE = 'speechLanguageMilestone',
    SOCIAL_DEVELOPMENT = 'socialDevelopment',
    COGNITIVE_CONCERNS = 'cognitiveConcerns',
}

export type DevelopmentalMilestoneFormType = {
    [key in DevelopmentalMilestoneFormKeys]: string | number | boolean;
};
