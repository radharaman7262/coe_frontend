import React from 'react';

import { SignInFormType, ErrorMessagesType, SignInFormKeys } from '@/types/signInFormType';

import { HTTP_METHOD } from '@/types/common';

import callApi from '@/app/api/api';

import { EMAIL_REGEX, PASSWORD_PATTERN } from '@/utils/regex';

import { PASSWORD_MIN_LENGTH, USER_NAME_MIN_LENGTH } from '@/constant/appConstants';
import { LOGIN_ENDPOINT } from '@/app/api/apiRoutes';

export const ERROR_MESSAGES = {
    passwordPattern: 'Password length should be 8 to 30 digits',
    namePattern: 'Name length should be 10 to 30 digits',
};

export const VALIDATION_RULES = {
    [SignInFormKeys.PASSWORD]: {
        length: PASSWORD_MIN_LENGTH,
        required: true,
        regex: PASSWORD_PATTERN,
        errorMessage: ERROR_MESSAGES.passwordPattern,
    },
    [SignInFormKeys.NAME]: {
        length: USER_NAME_MIN_LENGTH,
        required: true,
        regex: EMAIL_REGEX,
        errorMessage: ERROR_MESSAGES.namePattern,
    },
};

export const setErrorMsgOnValidationFailed = (
    key: SignInFormKeys,
    message: string,
    isInputValid: boolean,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessagesType>>,
) => {
    setErrorMessages((prevMessages: ErrorMessagesType) => ({
        ...prevMessages,
        [key]: isInputValid ? '' : message,
    }));
};

export const validateInput = (
    key: SignInFormKeys,
    value: string,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessagesType>>,
) => {
    const rule = VALIDATION_RULES[key];

    let isInputValid = true;

    if (
        (rule && 'required' in rule && rule.required && !value) ||
        (rule && 'regex' in rule && rule.regex && !rule.regex.test(value as string))
    ) {
        isInputValid = false;
    }

    setErrorMsgOnValidationFailed(
        key,
        rule ? rule.errorMessage : '',
        isInputValid,
        setErrorMessages,
    );

    return isInputValid;
};

export const checkAllValueValidOrNot = (args: {
    formValues: SignInFormType;
    errorMessages: ErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const isAllFieldsFilled = Object.keys(formValues).every(
        (key) => formValues[key as SignInFormKeys].trim() !== '',
    );

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const loginApiCall = async (body: SignInFormType) => {
    const response = await callApi({
        url: LOGIN_ENDPOINT,
        method: HTTP_METHOD.POST,
        body,
    });

    return response;
};
