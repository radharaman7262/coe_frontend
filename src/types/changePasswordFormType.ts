export enum ChangePasswordFormKeys {
    OLD_PASSWORD = 'oldPassword',
    NEW_PASSWORD = 'newPassword',
    CONFIRM_PASSWORD = 'confirmPassword',
}

export type ChangePasswordFormType = {
    [key in ChangePasswordFormKeys]: string;
};

export type ErrorMessagesType = {
    [key in ChangePasswordFormKeys]?: string;
};
