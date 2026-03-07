import { HomeEnvironmentFormKeys, HomeEnvironmentFormType } from './type';

export const INITIAL_STATE: HomeEnvironmentFormType = {
    [HomeEnvironmentFormKeys.STUDENT_ID]: '',
    [HomeEnvironmentFormKeys.APPROVAL_OF_INTERESTS]: '',
    [HomeEnvironmentFormKeys.DISCIPLINE_STRICTNESS]: '',
    [HomeEnvironmentFormKeys.EXPECTATIONS_FROM_CHILD]: '',
    [HomeEnvironmentFormKeys.FAMILY_DYNAMICS_PATTERN]: '',
    [HomeEnvironmentFormKeys.PARENTAL_CONSISTENCY]: '',
    [HomeEnvironmentFormKeys.PROTECTIVENESS]: '',
    [HomeEnvironmentFormKeys.TOLERANCE_OF_DEVIANCE]: '',
    [HomeEnvironmentFormKeys.PARENTAL_PERMISSIVENESS]: '',
};
