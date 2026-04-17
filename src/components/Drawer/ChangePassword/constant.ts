import { ChangePasswordFormKeys } from '@/types/changePasswordFormType';

export const CHANGE_PASSWORD_PAGE_DATA = {
    changePassword: 'Change Password',
    setNewPassword: 'Set a new password for your account to continue',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    updatePassword: 'Update Password',
    minimum8characters: 'Minimum 8 charaters',
    atleast11uppercase: 'At least 1 uppercase letter (A-Z)',
    atleast1lowercase: 'At least 1 lowercase letter (a-z)',
    atleast1number: 'At least 1 number (0-9)',
    atleast1specialcharacter: 'At least 1 special character (@, #, $, %, etc.)',
};

export const UPDATE_PASSWORD_INITIAL_STATE = {
    [ChangePasswordFormKeys.OLD_PASSWORD]: '',
    [ChangePasswordFormKeys.NEW_PASSWORD]: '',
    [ChangePasswordFormKeys.CONFIRM_PASSWORD]: '',
};
