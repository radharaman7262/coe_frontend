import { USER_TYPE_REGEX } from '@/utils/regex';
import { FIFTY_MAX_LENGTH, THREE_MIN_LENGTH } from '@/constant/appConstants';
import { UserTypeFormKeys } from './type';

export const USERTYPE_TEXT = {
    userType1: 'User Type',
    cancel: 'Cancel',
    addUserType: 'Add User Type',
    updateUserType: 'Update User Type',
    enterUserType: 'Enter User Type',
};

export const INITIAL_STATE = {
    [UserTypeFormKeys.USER_TYPE]: '',
};

export const MAX_LENGTHS: Record<UserTypeFormKeys, number> = {
    [UserTypeFormKeys.USER_TYPE]: FIFTY_MAX_LENGTH,
};

export const MIN_LENGTHS: Record<UserTypeFormKeys, number> = {
    [UserTypeFormKeys.USER_TYPE]: THREE_MIN_LENGTH,
};

export const ERROR_MESSAGES = {
    userTypeError: 'User Type should be between 3 to 30 characters.',
};

export const VALIDATION_RULES = {
    [UserTypeFormKeys.USER_TYPE]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.userTypeError,
    },
};
