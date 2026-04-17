import callApi from '@/app/api/api';
import { FORGOT_PASSWORD } from '@/app/api/apiRoutes';
import { HTTP_METHOD } from '@/types/common';
import { ForgotErrorMessageType, ForgotInFormKeys, ForgotInFormType } from '@/types/signInFormType';

import { EMAIL_REGEX } from '@/utils/regex';

import React from 'react';

export const ERROR_MESSAGES = {
    emailError: 'Please enter a valid email.',
};

export const VALIDATION_RULES = {
    [ForgotInFormKeys.FORGOT_PASSWORD]: {
        regex: EMAIL_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES.emailError,
    },
};

export const setErrorMsgOnValidationFailed = (
    key: ForgotInFormKeys,
    message: string,
    isInputValid: boolean,
    setErrorMessages: React.Dispatch<React.SetStateAction<ForgotErrorMessageType>>,
) => {
    setErrorMessages((prevMessages: ForgotErrorMessageType) => ({
        ...prevMessages,
        [key]: isInputValid ? '' : message,
    }));
};

export const validateInput = (
    key: ForgotInFormKeys,
    value: string,
    setErrorMessages: React.Dispatch<React.SetStateAction<ForgotErrorMessageType>>,
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
    formValues: ForgotInFormType;
    errorMessages: ForgotErrorMessageType;
}) => {
    const { formValues, errorMessages } = args;

    const isAllFieldsFilled = Object.keys(formValues).every(
        (key) => formValues[key as ForgotInFormKeys].trim() !== '',
    );

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const getResetPasswordLinkApiCall = async (body: ForgotInFormType) => {
    const response = await callApi({
        url: FORGOT_PASSWORD,
        method: HTTP_METHOD.POST,
        body,
    });

    return response;
};
