export enum PhysicalObservationFormKeys {
    GENERAL_APPEARANCE = 'generalAppearance',
    BEHAVIOR_PATTERN = 'behaviourPattern',
    ACTIVITY_LEVEL = 'activityLevel',
    POSTURE = 'posture',
    GAIT = 'gait',
    DEFORMITY = 'obvious',
}

export type PhysicalObservationFormType = {
    [key in PhysicalObservationFormKeys]: string;
};

export type ChiefComplainErrorMessagesType = {
    [key in PhysicalObservationFormKeys]?: string;
};
