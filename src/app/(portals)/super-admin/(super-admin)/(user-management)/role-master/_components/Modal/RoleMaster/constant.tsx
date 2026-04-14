import { USER_TYPE_REGEX } from '@/utils/regex';

import { FIFTY_MAX_LENGTH } from '@/constant/appConstants';

import { RoleFormKeys } from './type';

export const ROLE_TEXT = {
    roleName: 'Role Name',
    userType: 'User Type',
    cancel: 'Cancel',
    addRole: 'Add Role',
    enterRoleName: 'Enter Role Name',
    selectUserType: 'Select User Type',
    updateRole: 'Update Role',
};

export const INITIAL_STATE = {
    [RoleFormKeys.ROLE_NAME]: '',
    [RoleFormKeys.SELECTED_USER_TYPE]: null,
};

export const MAX_LENGTHS: Record<RoleFormKeys, number> = {
    [RoleFormKeys.ROLE_NAME]: FIFTY_MAX_LENGTH,
    [RoleFormKeys.SELECTED_USER_TYPE]: 0,
};

export const ERROR_MESSAGES = {
    roleError: 'User Role should be between 3 to 50 characters.',
};

export const VALIDATION_RULES = {
    [RoleFormKeys.ROLE_NAME]: {
        regex: USER_TYPE_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.roleError,
    },
    [RoleFormKeys.SELECTED_USER_TYPE]: null,
};
