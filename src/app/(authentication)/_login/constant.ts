import { FIFTY_MAX_LENGTH, THIRTY_MAX_LENGTH } from '@/constant/appConstants';
import { ForgotInFormKeys, SignInFormKeys } from '@/types/signInFormType';

export const LOGIN_PAGE_DATA = {
    heading: 'Login to your account',
    dashboardLogin: 'Enter your registered username & password to login',
    userNamePlaceholder: 'Enter Username',
    passwordPlaceholder: 'Enter Password',
    userNameLabel: 'Username',
    passwordLabel: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginButtonText: 'Login',
    copyRight: '© Copyright 2025,',
    rupantar: 'Rupantar',
    allRights: '- All rights reserved.',
    forgotpassword: 'Forgot Password',
    forgotdescription: 'Enter your registered email, and we’ll guide you to reset your password',
    forgotMailPlaceholder: 'Enter your mail',
    getResetLink: 'Get Reset link',
};

export const BUTTON_TEXT = {
    login: 'Log In',
};

export const MAX_LENGTHS = {
    [SignInFormKeys.NAME]: FIFTY_MAX_LENGTH,
    [SignInFormKeys.PASSWORD]: THIRTY_MAX_LENGTH,
};

export const SELECT_ROLE_DATA = {
    selectRole: 'Select Role',
    wehavefound: 'We have found multiple roles attached to your mail ID, select one to continue.',
    centerAdmin: 'Center Admin',
    specialEducator: 'Special Educator',
};

export const INITIAL_STATE = {
    [SignInFormKeys.NAME]: '',
    [SignInFormKeys.PASSWORD]: '',
};

export const FORGOT_INITIAL_STATE = {
    [ForgotInFormKeys.FORGOT_PASSWORD]: '',
};
