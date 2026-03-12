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
