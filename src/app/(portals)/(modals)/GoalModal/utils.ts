import React from 'react';
import { VALIDATION_RULES } from './constant';

import { GoalSetupFormKeys, ErrorMessagesType } from './type';

import { goalSetFormStateType } from '../../specialist/(specialist)/intervention/_components/type';

export const checkAllFieldValidOrNot = (args: {
    formValues: goalSetFormStateType;
    errorMessages: ErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const keys = Object.keys(formValues).filter(
        (item) => item !== GoalSetupFormKeys.LEVEL_OF_SUPPORT,
    );

    const isAllFieldsFilled = keys.every((key) => formValues[key as GoalSetupFormKeys]);

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const setErrorMsgOnValidationFailed = (
    key: GoalSetupFormKeys,
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
    key: GoalSetupFormKeys,
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
