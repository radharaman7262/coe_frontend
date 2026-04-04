import React from 'react';
import { CenterAdminFormKeys, CenterAdminFormType, ErrorMessagesType } from './type';
import { VALIDATION_RULES } from './constant';

export const checkAllFieldValidOrNot = (args: {
    formValues: CenterAdminFormType;
    errorMessages: ErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const keys = Object.keys(formValues).filter(
        (item) => item !== CenterAdminFormKeys.SELECTED_CENTER,
    );

    const isAllFieldsFilled = keys.every((key) => formValues[key as CenterAdminFormKeys]);

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const setErrorMsgOnValidationFailed = (
    key: CenterAdminFormKeys,
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
    key: CenterAdminFormKeys,
    value: string,
    setErrorMessages: React.Dispatch<React.SetStateAction<ErrorMessagesType>>,
) => {
    let isInputValid = true;

    const rule = VALIDATION_RULES[key];

    const trimmedValue = value?.trim();

    if (rule?.required && !trimmedValue) {
        isInputValid = false;
    }

    if (
        (key === CenterAdminFormKeys.FIRST_NAME || key === CenterAdminFormKeys.LAST_NAME) &&
        trimmedValue.length > 0 &&
        trimmedValue.length < 3
    ) {
        isInputValid = false;
    }

    if (rule?.regex && trimmedValue && !rule.regex.test(trimmedValue)) {
        isInputValid = false;
    }

    setErrorMessages((prev) => ({
        ...prev,
        [key]: isInputValid ? '' : rule?.errorMessage || '',
    }));

    return isInputValid;
};
