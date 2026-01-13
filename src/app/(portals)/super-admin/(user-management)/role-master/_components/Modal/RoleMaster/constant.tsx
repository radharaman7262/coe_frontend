import { RoleFormKeys } from './type';

export const ROLE_TEXT = {
    roleName: 'Role Name',
    userType: 'User Type',
    cancel: 'Cancel',
    addRole: 'Add Role',
    enterRoleName: 'Enter Role Name',
    selectUserType: 'Select User Type',
};

export const INITIAL_STATE = {
    [RoleFormKeys.ROLE_NAME]: '',
    [RoleFormKeys.SELECTED_USER_TYPE]: null,
    [RoleFormKeys.SEARCH_FILTER]: '',
};

// dUMMY Data //

export const ROLE_MASTER_LIST = [
    { id: 1, name: 'Center Admin' },
    { id: 2, name: 'Clinical Psychologist' },
    { id: 3, name: 'Special Educator' },
    { id: 4, name: 'Therapist' },
];
