export enum EnduranceFormKeys {
    UPPER_LIMB = 'upperLimbEndurance',
    LOWER_LIMB = 'lowerLimbEndurance',
    SITTING = 'sittingEndurance',
    STANDING = 'standingEndurance',
    ACTIVITY_SPECIFIC = 'activitySpecificEndurance',
}

export type EnduranceFormType = {
    [key in EnduranceFormKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in EnduranceFormKeys]?: string;
};
