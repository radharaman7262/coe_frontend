export enum HomeEnvironmentFormKeys {
    STUDENT_ID = 'studentId',

    PARENTAL_PERMISSIVENESS = 'parentalPermissiveness',
    PARENTAL_CONSISTENCY = 'parentalConsistency',
    DISCIPLINE_STRICTNESS = 'disciplineStrictness',
    APPROVAL_OF_INTERESTS = 'approvalOfInterests',
    PROTECTIVENESS = 'protectiveness',
    TOLERANCE_OF_DEVIANCE = 'toleranceOfDeviance',

    EXPECTATIONS_FROM_CHILD = 'expectationsFromChild',

    FAMILY_DYNAMICS_PATTERN = 'familyDynamicsPattern',
}

export type HomeEnvironmentFormType = {
    [key in HomeEnvironmentFormKeys]: string;
};

export type HomeEnvironmentErrorMessagesType = {
    [key in HomeEnvironmentFormKeys]?: string;
};
