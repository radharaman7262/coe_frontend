import { CreatePasswordFormKeys } from '@/types/changePasswordFormType';

export const NEW_PASSWORD_PAGE_DATA = {
    createPassword: 'Create New Password',
    setNewPassword: 'Set a new password for your account to continue',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    minimum8characters: 'Minimum 8 charaters',
    atleast11uppercase: 'At least 1 uppercase letter (A-Z)',
    atleast1lowercase: 'At least 1 lowercase letter (a-z)',
    atleast1number: 'At least 1 number (0-9)',
    atleast1specialcharacter: 'At least 1 special character (@, #, $, %, etc.)',
    updatepassword: 'Create Password',
};

export const UPDATE_PASSWORD_INITIAL_STATE = {
    [CreatePasswordFormKeys.NEW_PASSWORD]: '',
    [CreatePasswordFormKeys.CONFIRM_PASSWORD]: '',
};
