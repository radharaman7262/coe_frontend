export enum HomeEnvironmentFormKeys {
    PATTERNS_OF_PARENTAL_FUNCTIONING = 'parental',
    CONSISTENCY = 'consistency',
    DISCIPLINE = 'discipline',
    APPROVAL = 'approval',
    PROTECTIVENESS = 'protectiveness',
    DEVIANCE = 'deviance',
    CHILD_EXPECTATIONS = 'childExpectation',
    FAMILY_DYNAMICS = 'familyDynamics',
}

export type HomeEnvironmentFormType = {
    [key in HomeEnvironmentFormKeys]: string;
};

export type HomeEnvironmentErrorMessagesType = {
    [key in HomeEnvironmentFormKeys]?: string;
};
