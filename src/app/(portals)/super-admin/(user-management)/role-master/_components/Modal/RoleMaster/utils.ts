import React from 'react';

import { RoleFormKeys, RoleFormType } from './type';
import { ERROR_MESSAGES, VALIDATION_RULES } from './constant';

export const validateInput = (key: RoleFormKeys, value: string) => {
    const rule = VALIDATION_RULES[key];
    let message = '';
    const { roleError } = ERROR_MESSAGES;

    let isInputValid = true;

    const trimmedValue = value.trim();

    if (rule?.required && !trimmedValue) {
        isInputValid = false;
        message = roleError;
    }

    if (key === RoleFormKeys.ROLE_NAME && trimmedValue.length > 0 && trimmedValue.length < 3) {
        isInputValid = false;
        message = roleError;
    }

    if (rule?.regex && trimmedValue && !rule.regex.test(trimmedValue)) {
        isInputValid = false;
        message = roleError;
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
