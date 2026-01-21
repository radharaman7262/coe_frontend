import React from 'react';

import { RoleFormKeys, RoleFormType } from './type';
import { ERROR_MESSAGES, VALIDATION_RULES } from './constant';

export const validateInput = (key: RoleFormKeys, value: string | number | boolean) => {
    const rule = VALIDATION_RULES[key];
    let message = '';
    const { roleError } = ERROR_MESSAGES;

    let isInputValid = true;

    if (
        (rule && 'required' in rule && rule.required && !value) ||
        (rule && 'regex' in rule && rule.regex && !rule.regex.test(value as string))
    ) {
        isInputValid = false;
        message = roleError;

        return { key, message, isInputValid };
    }

    return { key, message, isInputValid };
};

export const setErrorMsgOnValidationFailed = (args: {
    key: RoleFormKeys;
    message: string | undefined;
    isInputValid: boolean;
    setErrorMessages: (value: React.SetStateAction<RoleErrorMessagesType>) => void;
}) => {
    const { key, isInputValid, message, setErrorMessages } = args;

    setErrorMessages((prevMessages: RoleErrorMessagesType) => ({
        ...prevMessages,
        [key]: isInputValid ? '' : message,
    }));
};

export const checkAllFieldValidOrNot = (args: {
    formValues: RoleFormType;
    errorMessages: RoleErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const isAllFieldsFilled = Object.keys(formValues).every(
        (key) => formValues[key as RoleFormKeys],
    );

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export type RoleErrorMessagesType = {
    [key in RoleFormKeys]?: string;
};
