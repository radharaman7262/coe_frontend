export enum SignInFormKeys {
    NAME = 'email',
    PASSWORD = 'password',
}

export type SignInFormType = {
    [key in SignInFormKeys]: string;
};

export type ErrorMessagesType = {
    [key in SignInFormKeys]?: string;
};

export enum ForgotInFormKeys {
    FORGOT_PASSWORD = 'email',
}

export type ForgotInFormType = {
    [key in ForgotInFormKeys]: string;
};

export type ForgotErrorMessageType = {
    [key in ForgotInFormKeys]?: string;
};
