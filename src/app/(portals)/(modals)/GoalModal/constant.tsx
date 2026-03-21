import { FIFTY_MAX_LENGTH, THIRTY_MAX_LENGTH, THREE_MIN_LENGTH } from '@/constant/appConstants';

import { CENTER_NAME_REGEX } from '@/utils/regex';

import { GoalSetupFormKeys } from './type';

export const MAX_LENGTHS: Partial<Record<GoalSetupFormKeys, number>> = {
    [GoalSetupFormKeys.GOAL_TITLE]: THIRTY_MAX_LENGTH,
    [GoalSetupFormKeys.BEHAVIOUR]: FIFTY_MAX_LENGTH,
    [GoalSetupFormKeys.ACCURACY]: THREE_MIN_LENGTH,
};

export const ERROR_MESSAGES = {
    goalTitleCreation: 'Goal Title be between 3 to 30 characters.',
};

export const VALIDATION_RULES = {
    [GoalSetupFormKeys.GOAL_TITLE]: {
        regex: CENTER_NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.goalTitleCreation,
    },
    [GoalSetupFormKeys.ACCURACY]: {
        regex: CENTER_NAME_REGEX,
        required: true,
        errorMessage: '',
    },
    [GoalSetupFormKeys.BEHAVIOUR]: {
        regex: CENTER_NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.goalTitleCreation,
    },
    [GoalSetupFormKeys.LEVEL_OF_SUPPORT]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
    [GoalSetupFormKeys.DURATION]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
};

export const INITIAL_STATE = {
    [GoalSetupFormKeys.GOAL_TITLE]: '',
    [GoalSetupFormKeys.BEHAVIOUR]: '',
    [GoalSetupFormKeys.ACCURACY]: '',
    [GoalSetupFormKeys.LEVEL_OF_SUPPORT]: null,
    [GoalSetupFormKeys.DURATION]: null,
};
