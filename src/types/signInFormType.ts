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
