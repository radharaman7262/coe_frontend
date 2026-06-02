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

export enum CreatePasswordFormKeys {
    NEW_PASSWORD = 'newPassword',
    CONFIRM_PASSWORD = 'confirmPassword',
}

export type CreatePasswordFormType = {
    [key in CreatePasswordFormKeys]: string;
};

export type ErrorForgotMessagesType = {
    [key in CreatePasswordFormKeys]?: string;
};
