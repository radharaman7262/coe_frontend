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
    const rule = VALIDATION_RULES[key];
    let isInputValid = true;

    const trimmedValue = value.trim();

    if (rule?.required && !trimmedValue) {
        isInputValid = false;
    }

    if (key === AdminStaffFormKeys.NAME && trimmedValue.length > 0 && trimmedValue.length < 3) {
        isInputValid = false;
    }

    if (key === AdminStaffFormKeys.PHONE_NO && trimmedValue && !/^[6-9]\d{9}$/.test(trimmedValue)) {
        isInputValid = false;
    }

    if (
        key === AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE &&
        trimmedValue &&
        (Number(trimmedValue) < 0 || trimmedValue.length > 2)
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

export const filterList = <T>(filterValue: string, key: keyof T, list: T[] = []): T[] => {
    if (!filterValue) return list;

    const lowerCaseFilter = filterValue.toLowerCase();

    return list.filter((item) =>
        String(item?.[key] ?? '')
            .toLowerCase()
            .includes(lowerCaseFilter),
    );
};
