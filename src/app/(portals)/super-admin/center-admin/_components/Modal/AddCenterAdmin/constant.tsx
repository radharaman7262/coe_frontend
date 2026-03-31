import { TEN_MIN_LENGTH, THIRTY_MAX_LENGTH } from '@/constant/appConstants';

import { MOBILE_NUMBER_REGEX, NAME_REGEX } from '@/utils/regex';

import { CenterAdminFormKeys } from './type';

export const CENTER_ADMIN_TEXT = {
    addCenterAdmin: 'Add center admin',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNo: 'Phone no',
    emailId: 'Email ID',
    role: 'Role',
    specialization: 'Specialization',
    heyJustNeeds: 'Hey, just so you know, you can totally assign them to the center later!',
    assignCenter: 'Assign Center',
    enterHere: 'Enter here',
    centerAdmin: 'Center Admin',
    selectSpecialization: 'Select Specialization',
    selectCenter: 'Select Center',
    cancel: 'Cancel',
    create: 'Create',
    update: 'Update',
};

export const INITIAL_STATE = {
    [CenterAdminFormKeys.FIRST_NAME]: '',
    [CenterAdminFormKeys.LAST_NAME]: '',
    [CenterAdminFormKeys.PHONE_NO]: '',
    [CenterAdminFormKeys.EMAIL_ID]: '',
    [CenterAdminFormKeys.SELECTED_SPECIALIZATION]: null,
    [CenterAdminFormKeys.SELECTED_CENTER]: null,
};

export const MAX_LENGTHS: Partial<Record<CenterAdminFormKeys, number>> = {
    [CenterAdminFormKeys.FIRST_NAME]: THIRTY_MAX_LENGTH,
    [CenterAdminFormKeys.LAST_NAME]: THIRTY_MAX_LENGTH,
    [CenterAdminFormKeys.PHONE_NO]: TEN_MIN_LENGTH,
    // [CenterAdminFormKeys.EMAIL_ID]: THIRTY_MAX_LENGTH,
};

export const ERROR_MESSAGES = {
    firstNameErrorCreation: 'First Name should be between 3 to 30 characters.',
    lastNameErrorCreation: 'Last Name should be between 3 to 30 characters.',
    contactErrorDetail: 'Phone Number should be 10 numbers.',
    emailErrorDetail: 'Email should be between 3 to 50 characters.',
};

export const VALIDATION_RULES = {
    [CenterAdminFormKeys.FIRST_NAME]: {
        regex: NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.firstNameErrorCreation,
    },
    [CenterAdminFormKeys.LAST_NAME]: {
        regex: NAME_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.lastNameErrorCreation,
    },
    [CenterAdminFormKeys.PHONE_NO]: {
        regex: MOBILE_NUMBER_REGEX,
        required: true,
        errorMessage: ERROR_MESSAGES?.contactErrorDetail,
    },
    [CenterAdminFormKeys.EMAIL_ID]: {
        regex: null,
        required: false,
        errorMessage: ERROR_MESSAGES?.emailErrorDetail,
    },
    [CenterAdminFormKeys.SELECTED_CENTER]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
    [CenterAdminFormKeys.SELECTED_SPECIALIZATION]: {
        regex: null,
        required: false,
        errorMessage: '',
    },
};
