import React from 'react';

import { AdminStaffFormKeys, AdminStaffFormType, ErrorMessagesType } from './type';

import { VALIDATION_RULES } from './constant';

export const checkAllFieldValidOrNot = (args: {
    formValues: AdminStaffFormType;
    errorMessages: ErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const keys = Object.keys(formValues);

    const isAllFieldsFilled = keys.every((key) => {
        const value = formValues[key as AdminStaffFormKeys];

        if (Array.isArray(value)) {
            return value.length > 0;
        }

        return value !== null && value !== '';
    });

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const setErrorMsgOnValidationFailed = (
    key: AdminStaffFormKeys,
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
    key: AdminStaffFormKeys,
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

export const filterList = <T>(filterValue: string, key: keyof T, list: T[] = []): T[] => {
    if (!filterValue) return list;

    const lowerCaseFilter = filterValue.toLowerCase();

    return list.filter((item) =>
        String(item?.[key] ?? '')
            .toLowerCase()
            .includes(lowerCaseFilter),
    );
};
