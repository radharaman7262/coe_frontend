import { TEN_MIN_LENGTH, THIRTY_MAX_LENGTH } from '@/constant/appConstants';

import { EMAIL_REGEX, MOBILE_NUMBER_REGEX, NAME_REGEX } from '@/utils/regex';

import { AdminStaffFormKeys, FormValues } from './type';

export const CENTER_ADMIN_TEXT = {
    addNewProfessional: 'Add New Professional',
    name: 'Name',
    gender: 'Gender',
    phoneNo: 'Phone no',
    emailId: 'Email ID',
    assignRole: 'Assign Role',
    selectRole: 'Select Role',
    labelSpecialization: 'Specialization (Multi Select)',
    selectSpecialization: 'Select Specialization',
    totalYearExperience: 'Total Years of Experience',
    languageKnown: 'Languages Known (Multi Select)',
    selectLanguage: 'Select Language',
    create: 'Add & Send Invite link',
    enterHere: 'Enter here',
};

export const INITIAL_STATE: FormValues = {
    [AdminStaffFormKeys.NAME]: '',
    [AdminStaffFormKeys.PHONE_NO]: '',
    [AdminStaffFormKeys.EMAIL_ID]: '',
    [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]: '',
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: [],
    [AdminStaffFormKeys.GENDER]: [],
    [AdminStaffFormKeys.ASSIGN_ROLE]: [],
    [AdminStaffFormKeys.LANGUAGE]: [],
};

export const MAX_LENGTHS: Partial<Record<AdminStaffFormKeys, number>> = {
    [AdminStaffFormKeys.NAME]: TEN_MIN_LENGTH,
    [AdminStaffFormKeys.PHONE_NO]: TEN_MIN_LENGTH,
    [AdminStaffFormKeys.EMAIL_ID]: THIRTY_MAX_LENGTH,
};

export const ERROR_MESSAGES = {
    nameErrorCreation: 'Name should be between 3 to 10 characters.',
    contactErrorDetail: 'Phone Number should be 10 numbers.',
    emailErrorDetail: 'Email should be between 3 to 50 characters.',
};

export const VALIDATION_RULES = {
    [AdminStaffFormKeys.NAME]: {
        regex: NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.nameErrorCreation,
    },
    [AdminStaffFormKeys.PHONE_NO]: {
        regex: MOBILE_NUMBER_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.contactErrorDetail,
    },
    [AdminStaffFormKeys.EMAIL_ID]: {
        regex: EMAIL_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.emailErrorDetail,
    },
    [AdminStaffFormKeys.GENDER]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
};

export const filterList = <T extends { name?: string; roleName?: string }>(
    filterValue: string,
    key: 'name' | 'roleName',
    list: T[] = [],
) => list.filter((item) => (item?.[key] ?? '').toLowerCase().includes(filterValue.toLowerCase()));
