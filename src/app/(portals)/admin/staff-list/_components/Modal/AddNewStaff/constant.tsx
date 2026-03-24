import { TEN_MIN_LENGTH, THIRTY_MAX_LENGTH, TWO_MIN_LENGTH } from '@/constant/appConstants';

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
    labelSpecialization: 'Specialization',
    selectSpecialization: 'Select Specialization',
    totalYearExperience: 'Total Years of Experience',
    languageKnown: 'Languages Known (Multi Select)',
    selectLanguage: 'Select Language',
    create: 'Add & Send Invite link',
    update: 'Update & Send Invite link',
    enterHere: 'Enter here',
};

export const INITIAL_STATE: FormValues = {
    [AdminStaffFormKeys.NAME]: '',
    [AdminStaffFormKeys.PHONE_NO]: '',
    [AdminStaffFormKeys.EMAIL_ID]: '',
    [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]: '',
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: null,
    [AdminStaffFormKeys.GENDER]: null,
    [AdminStaffFormKeys.ASSIGN_ROLE]: null,
    [AdminStaffFormKeys.LANGUAGE]: [],
};

export const MAX_LENGTHS: Partial<Record<AdminStaffFormKeys, number>> = {
    [AdminStaffFormKeys.NAME]: THIRTY_MAX_LENGTH,
    [AdminStaffFormKeys.PHONE_NO]: TEN_MIN_LENGTH,
    [AdminStaffFormKeys.EMAIL_ID]: THIRTY_MAX_LENGTH,
    [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]: TWO_MIN_LENGTH,
};

export const ERROR_MESSAGES = {
    nameErrorCreation: 'Name should be between 3 to 10 characters.',
    contactErrorDetail: 'Phone Number should be 10 numbers.',
    emailErrorDetail: 'Email should be between 3 to 50 characters.',
    totalYearExperience: 'Total Year of experience',
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
        required: true,
        errorMessage: '',
    },
    [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: {
        regex: null,
        required: true,
        errorMessage: '',
    },
    [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]: {
        regex: null,
        required: true,
        errorMessage: ERROR_MESSAGES?.totalYearExperience,
    },
    [AdminStaffFormKeys.LANGUAGE]: {
        regex: null,
        required: true,
        errorMessage: '',
    },
    [AdminStaffFormKeys.ASSIGN_ROLE]: {
        regex: null,
        required: true,
        errorMessage: '',
    },
};
