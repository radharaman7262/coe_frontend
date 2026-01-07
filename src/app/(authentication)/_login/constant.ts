import { PASSWORD_MAX_LENGTH, USER_NAME_MAX_LENGTH } from "@/constant/appConstants";
import { SignInFormKeys } from "@/types/signInFormType";

export const LOGIN_PAGE_DATA = {
    heading: 'Admin',
    dashboardLogin: 'Dashboard Login',
    userNamePlaceholder: 'Enter Your Username',
    passwordPlaceholder: 'Enter Your Password',
    userNameLabel: 'Username',
    passwordLabel: 'Password',
    rememberMe: 'Remember me',
    loginButtonText: 'Login',
    copyRight: '© Copyright 2025,',
    rupantar: 'Rupantar',
    allRights: '- All rights reserved.',
};

export const BUTTON_TEXT = {
    login: 'Login',
};

export const MAX_LENGTHS = {
    [SignInFormKeys.NAME]: USER_NAME_MAX_LENGTH,
    [SignInFormKeys.PASSWORD]: PASSWORD_MAX_LENGTH,
};