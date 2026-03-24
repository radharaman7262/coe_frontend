export enum HomeEnvironmentFormKeys {
    PATTERNS_OF_PARENTAL_FUNCTIONING = 'data',
    CHILD_EXPECTATIONS = 'childExpectation',
    FAMILY_DYNAMICS = 'familyDynamics',
}

export type HomeEnvironmentFormType = {
    [key in HomeEnvironmentFormKeys]: string;
};

export type HomeEnvironmentErrorMessagesType = {
    [key in HomeEnvironmentFormKeys]?: string;
};
